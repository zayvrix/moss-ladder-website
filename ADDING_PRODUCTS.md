# Adding & Managing Portfolio Products

Moss Ladder is engineered to support 50–100+ digital tools across diverse industries without database dependence. Adding or updating a single typed record in `src/data/products.ts` automatically updates:
- The searchable & filterable product directory (`/products/`)
- Dynamic product detail specification pages (`/products/[slug]/`)
- Generated category archives (`/products/category/[slug]/`)
- Related products recommendations
- XML sitemaps (`sitemap-index.xml`) and JSON-LD structured schemas (`SoftwareApplication`, `BreadcrumbList`).

---

## 1. Concrete Product Record Example

Add your new product record to the `products` array in [`src/data/products.ts`](src/data/products.ts):

```ts
{
  id: 'document-cleaner',
  slug: 'document-cleaner',
  name: 'DocumentCleaner',
  shortDescription: 'Client-side metadata sanitizer and PDF/DOCX privacy scrubber.',
  description:
    'DocumentCleaner is a focused privacy utility that strips hidden tracking tags, author revisions, GPS coordinates, and embedded printer metadata from documents before external sharing.',
  categoryId: 'productivity', // Must match an ID in src/data/categories.ts
  status: 'planned', // 'live' | 'in-development' | 'planned' | 'archived'
  websiteUrl: undefined, // Only supply for genuinely live products with public URLs
  logoPath: '/brand/products/document-cleaner-icon.svg', // Optional
  coverImagePath: '/brand/products/document-cleaner-preview.svg', // Optional
  featured: true,
  tags: ['Privacy', 'Document Scrubbing', 'PDF Utility', 'Security'],
  launchedAt: undefined, // e.g. '2026-11-01' when live
  updatedAt: '2026-10-30',
  features: [
    'Zero-server execution: Files never leave local browser memory',
    'EXIF and revision history scrubbing for PDF, DOCX, and XLSX',
    'Batch document processing with instant clean ZIP export',
  ],
  targetAudience: 'Legal teams, journalists, consultants, and privacy-conscious professionals.',
  problemSolved:
    'Modern document editors embed extensive private metadata (author names, device identifiers, geolocations) that is inadvertently leaked during email and web distribution.',
}
```

---

## 2. Adding Visual Assets

Place product icons and preview schematics in `public/brand/products/`:

1. **Product Icon:** Save an SVG or PNG at `public/brand/products/<slug>-icon.svg` (recommended size: 48x48px).
2. **Interface Preview:** Save an SVG or screenshot at `public/brand/products/<slug>-preview.svg` (recommended size: 800x480px or 16:9 ratio).
3. If no image is provided, the card and detail page gracefully render a clean geometric typographic placeholder.

---

## 3. Categories Management

Categories are defined in [`src/data/categories.ts`](src/data/categories.ts):

```ts
export const categories: Category[] = [
  {
    id: 'finance-tax',
    slug: 'finance-tax',
    name: 'Finance & Tax',
    description: 'Precision calculation engines and educational planning models for complex tax rules.',
  },
  {
    id: 'productivity',
    slug: 'productivity',
    name: 'Productivity & Utilities',
    description: 'Frictionless, focused digital utilities designed to streamline common workflows.',
  },
];
```

> **Important Rule:** Category archive pages (`/products/category/[slug]/`) are **only generated for populated categories** (categories containing at least 1 product). Empty categories will never create thin or empty web pages.

---

## 4. Switching a Product from Planned to Live

When an upcoming tool is ready for public release:

1. Open `src/data/products.ts`.
2. Locate the product record.
3. Update `status: 'live'`.
4. Provide the public `websiteUrl` (e.g. `websiteUrl: 'https://newtool.com'`).
5. Set `launchedAt: 'YYYY-MM-DD'`.
6. Verify feature bullet points against the live tool to ensure zero inaccurate claims.
7. Run `npm run check` and `npm run test` to verify.

---

## 5. Archiving a Product

If a digital tool is retired or sunset:
1. Change `status: 'archived'`.
2. The product will display an "Archived" badge and be deprioritized in search results while preserving its canonical URL to avoid breaking external links.

---

## 6. One-Sentence Codex Instruction Template

To ask Codex or an AI assistant to add a new product for you, use this template:

> *"Add a new [status] product named '[Product Name]' with slug '[slug]' under category '[category-id]', describing [what it calculates or does], with 3 key verified features in src/data/products.ts, run tests, and verify build."*
