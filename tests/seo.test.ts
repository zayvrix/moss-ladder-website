import { describe, it, expect } from 'vitest';
import { 
  formatPageTitle, 
  generateCanonical, 
  generateOrganizationSchema, 
  generateBreadcrumbSchema,
  generateProductSchema 
} from '../src/utils/seo';
import { getProductBySlug } from '../src/utils/products';
import { companyConfig } from '../src/config/company';

describe('SEO & Structured Data Helpers', () => {
  it('formats page titles with brand branding', () => {
    expect(formatPageTitle()).toBe('Moss Ladder — Useful things, thoughtfully built.');
    expect(formatPageTitle('About')).toBe('About | Moss Ladder');
    expect(formatPageTitle('Products')).toBe('Products | Moss Ladder');
  });

  it('generates normalized canonical URLs with trailing slashes', () => {
    const canonicalHome = generateCanonical('/');
    expect(canonicalHome).toBe(`${companyConfig.siteUrl}/`);

    const canonicalProducts = generateCanonical('/products');
    expect(canonicalProducts).toBe(`${companyConfig.siteUrl}/products/`);

    const canonicalDetail = generateCanonical('products/rothprorata');
    expect(canonicalDetail).toBe(`${companyConfig.siteUrl}/products/rothprorata/`);
  });

  it('generates factual Organization schema without fabricated details', () => {
    const org = generateOrganizationSchema();
    expect(org['@type']).toBe('Organization');
    expect(org.name).toBe('Moss Ladder');
    expect(org.slogan).toBe(companyConfig.tagline);
    // Ensure no fake employee counts, ratings or certifications
    expect((org as any).numberOfEmployees).toBeUndefined();
    expect((org as any).aggregateRating).toBeUndefined();
  });

  it('generates valid BreadcrumbList schema', () => {
    const breadcrumb = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'RothProRata', url: '/products/rothprorata/' },
    ]);

    expect(breadcrumb['@type']).toBe('BreadcrumbList');
    expect(breadcrumb.itemListElement.length).toBe(3);
    expect(breadcrumb.itemListElement[0].position).toBe(1);
    expect(breadcrumb.itemListElement[0].name).toBe('Home');
    expect(breadcrumb.itemListElement[2].name).toBe('RothProRata');
  });

  it('generates SoftwareApplication schema with live offers for live products', () => {
    const rpr = getProductBySlug('rothprorata')!;
    const schema = generateProductSchema(rpr);

    expect(schema['@type']).toBe('SoftwareApplication');
    expect(schema.name).toBe('RothProRata');
    expect(schema.sameAs).toBe('https://rothprorata.com');
    expect((schema as any).offers?.price).toBe('0');
  });

  it('generates SoftwareApplication schema without live link for planned products', () => {
    const irmaa = getProductBySlug('irmaa-clarity')!;
    const schema = generateProductSchema(irmaa);

    expect(schema['@type']).toBe('SoftwareApplication');
    expect(schema.name).toBe('IRMAA Clarity');
    expect(schema.sameAs).toBeUndefined();
    expect((schema as any).offers).toBeUndefined();
  });
});
