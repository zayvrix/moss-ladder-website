import { companyConfig } from '../config/company';
import type { Product } from '../types/product';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export function generateCanonical(path: string): string {
  const base = companyConfig.siteUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Ensure trailing slash for directory style URLs
  const trailingPath = cleanPath.endsWith('/') || cleanPath.includes('.') ? cleanPath : `${cleanPath}/`;
  return `${base}${trailingPath}`;
}

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === companyConfig.name) {
    return `${companyConfig.name} — ${companyConfig.tagline}`;
  }
  return `${pageTitle} | ${companyConfig.name}`;
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyConfig.name,
    legalName: companyConfig.legal.operatorName,
    url: companyConfig.siteUrl,
    logo: `${companyConfig.siteUrl}/brand/moss-ladder-symbol.svg`,
    description: companyConfig.description,
    slogan: companyConfig.tagline,
    knowsAbout: [
      'Digital Products',
      'Web Applications',
      'Financial Calculators',
      'Software Architecture',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyConfig.name,
    url: companyConfig.siteUrl,
    description: companyConfig.description,
    publisher: {
      '@type': 'Organization',
      name: companyConfig.name,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : generateCanonical(item.url),
    })),
  };
}

export function generateProductSchema(product: Product) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any (Web Browser)',
    url: generateCanonical(`/products/${product.slug}/`),
    author: {
      '@type': 'Organization',
      name: companyConfig.name,
      url: companyConfig.siteUrl,
    },
  };

  if (product.status === 'live' && product.websiteUrl) {
    schema.sameAs = product.websiteUrl;
    schema.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    };
  }

  return schema;
}
