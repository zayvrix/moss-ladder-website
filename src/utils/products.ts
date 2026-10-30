import { products } from '../data/products';
import { categories } from '../data/categories';
import type { Product, Category, ProductStatus } from '../types/product';

export function getAllProducts(): Product[] {
  return [...products];
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categoryIdOrSlug: string): Product[] {
  const category = categories.find(
    (c) => c.id === categoryIdOrSlug || c.slug === categoryIdOrSlug
  );
  if (!category) return [];
  return products.filter((p) => p.categoryId === category.id);
}

/**
 * Returns only categories that have at least one product associated with them.
 * Crucial requirement: Never generate empty category pages.
 */
export function getPopulatedCategories(): Array<Category & { productCount: number }> {
  return categories
    .map((category) => {
      const count = products.filter((p) => p.categoryId === category.id).length;
      return {
        ...category,
        productCount: count,
      };
    })
    .filter((cat) => cat.productCount > 0);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .map((p) => {
      let score = 0;
      if (p.categoryId === product.categoryId) score += 3;
      if (product.tags && p.tags) {
        const sharedTags = p.tags.filter((tag) => product.tags?.includes(tag));
        score += sharedTags.length;
      }
      return { product: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .slice(0, limit)
    .map((item) => item.product);
}

export function formatProductStatus(status: ProductStatus): {
  label: string;
  badgeClass: string;
  dotClass: string;
} {
  switch (status) {
    case 'live':
      return {
        label: 'Live',
        badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
        dotClass: 'bg-emerald-500',
      };
    case 'in-development':
      return {
        label: 'In Development',
        badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
        dotClass: 'bg-amber-500',
      };
    case 'planned':
      return {
        label: 'Planned',
        badgeClass: 'bg-stone-100 text-stone-700 border-stone-200',
        dotClass: 'bg-stone-400',
      };
    case 'archived':
      return {
        label: 'Archived',
        badgeClass: 'bg-stone-50 text-stone-500 border-stone-200',
        dotClass: 'bg-stone-300',
      };
  }
}

export function getProductCounts(): {
  total: number;
  live: number;
  planned: number;
  inDevelopment: number;
} {
  return {
    total: products.length,
    live: products.filter((p) => p.status === 'live').length,
    planned: products.filter((p) => p.status === 'planned').length,
    inDevelopment: products.filter((p) => p.status === 'in-development').length,
  };
}
