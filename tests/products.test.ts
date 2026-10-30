import { describe, it, expect } from 'vitest';
import { 
  getAllProducts, 
  getProductBySlug, 
  getFeaturedProducts, 
  getPopulatedCategories, 
  getProductsByCategory,
  getRelatedProducts,
  getProductCounts,
  formatProductStatus
} from '../src/utils/products';
import { categories } from '../src/data/categories';

describe('Product Catalog & Data Models', () => {
  const products = getAllProducts();

  it('contains initial products with complete required fields', () => {
    expect(products.length).toBeGreaterThanOrEqual(5);

    for (const p of products) {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.shortDescription).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.categoryId).toBeTruthy();
      expect(['live', 'in-development', 'planned', 'archived']).toContain(p.status);
      expect(typeof p.featured).toBe('boolean');

      // Slugs must be URL-safe
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('correctly models RothProRata as live with verified website URL', () => {
    const rpr = getProductBySlug('rothprorata');
    expect(rpr).toBeDefined();
    expect(rpr?.status).toBe('live');
    expect(rpr?.websiteUrl).toBe('https://rothprorata.com');
    expect(rpr?.features?.length).toBeGreaterThan(0);
  });

  it('correctly models planned products without fake URLs', () => {
    const plannedSlugs = ['irmaa-clarity', 'optiamt', 'supplemental-wage-tax-calculator', 'scorp-reasonable-salary'];
    for (const slug of plannedSlugs) {
      const p = getProductBySlug(slug);
      expect(p).toBeDefined();
      expect(p?.status).toBe('planned');
      expect(p?.websiteUrl).toBeUndefined();
    }
  });

  it('returns populated categories only and excludes empty ones', () => {
    const populated = getPopulatedCategories();
    expect(populated.length).toBeGreaterThan(0);
    for (const cat of populated) {
      expect(cat.productCount).toBeGreaterThan(0);
    }

    // Categories with 0 products should not be in populated categories
    const allCatIds = categories.map((c) => c.id);
    const populatedIds = populated.map((c) => c.id);
    const emptyCats = categories.filter((c) => getProductsByCategory(c.id).length === 0);
    for (const empty of emptyCats) {
      expect(populatedIds).not.toContain(empty.id);
    }
  });

  it('computes accurate product counts', () => {
    const counts = getProductCounts();
    expect(counts.total).toBe(products.length);
    expect(counts.live).toBe(1); // RothProRata
    expect(counts.planned).toBe(4);
    expect(counts.inDevelopment).toBe(0);
  });

  it('resolves related products within same category', () => {
    const rpr = getProductBySlug('rothprorata')!;
    const related = getRelatedProducts(rpr, 2);
    expect(related.length).toBeGreaterThan(0);
    expect(related.every((p) => p.id !== rpr.id)).toBe(true);
  });

  it('formats product statuses correctly', () => {
    const liveFormat = formatProductStatus('live');
    expect(liveFormat.label).toBe('Live');
    expect(liveFormat.badgeClass).toContain('emerald');

    const plannedFormat = formatProductStatus('planned');
    expect(plannedFormat.label).toBe('Planned');
    expect(plannedFormat.badgeClass).toContain('stone');
  });
});
