# Moss Ladder — Corporate Website & Digital Product Portfolio

> **Canonical Brand:** Moss Ladder  
> **Tagline:** Useful things, thoughtfully built.  
> **Brand Position:** Moss Ladder is an independent digital product brand developing practical software, online tools, and thoughtfully designed web experiences.

Moss Ladder is an umbrella brand and product studio that creates and operates independent web applications, precision calculators, and digital utilities across diverse sectors.

---

## 1. Architecture & Tech Stack

- **Framework:** [Astro](https://astro.build/) (v7.4 Static Generation / SSG)
- **Language:** TypeScript (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4 with `@tailwindcss/vite`)
- **Icons & Graphics:** Original architectural SVG brand system and vector assets
- **SEO & Discovery:** Automated XML sitemaps (`@astrojs/sitemap`), Schema.org JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`), Open Graph, and Twitter Cards
- **Testing:** [Vitest](https://vitest.dev/) unit test suite + Astro Check diagnostics
- **Deployment Target:** [Cloudflare Pages](https://pages.cloudflare.com/) (Free tier compatible, static output: `dist`)

---

## 2. Quick Start & Local Development

### Prerequisites
- Node.js `v22.0.0` or higher (verified on Node `v24.x`)
- npm `v10.x` or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/moss-ladder-website.git
cd moss-ladder-website

# Install dependencies
npm install
```

### Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:4321` to preview the site with hot-module replacement.

---

## 3. Build & Quality Verification

Run these commands before any commit or production deployment:

```bash
# 1. Typecheck and Astro template diagnostics
npm run check

# 2. Run unit test suite (Vitest)
npm run test

# 3. Compile static production build (generates 'dist/' directory)
npm run build

# 4. Preview compiled production output locally
npm run preview
```

---

## 4. Central Brand Configuration

All company details, canonical names, domain variables, and contact mailboxes are managed centrally in [`src/config/company.ts`](src/config/company.ts).

```ts
export const companyConfig: CompanyConfig = {
  name: 'Moss Ladder',
  wordmark: 'MOSS LADDER',
  slug: 'moss-ladder',
  tagline: 'Useful things, thoughtfully built.',
  // Update once domain is purchased and connected
  siteUrl: process.env.SITE_URL || 'https://moss-ladder.pages.dev',
  provisionalDomain: 'mossladder.com',
  // ...
};
```

To update URLs or brand properties, modify `src/config/company.ts`. The header, footer, metadata, canonical links, and Schema.org graphs update automatically project-wide.

---

## 5. Contact Desk & Mailbox Setup

The site implements a **zero-fake-submission** contact experience in [`src/pages/contact.astro`](src/pages/contact.astro):
- By default, form submission triggers an encoded `mailto:` dispatch pre-filled with the user's name, email, inquiry type, and tagged product.
- A one-click copy button provides instant clipboard access to the configured mailbox.
- **Serverless Form Backend (Optional):** If you wish to route form submissions via an API (e.g., Cloudflare Pages Functions, Formspree, Resend, or Turnstile), you can activate a server endpoint and update `companyConfig.contact.hasActiveFormBackend`. Never commit email API keys client-side.

---

## 6. Cloudflare Pages Deployment

Deploying Moss Ladder to Cloudflare Pages requires zero recurring hosting costs:

1. Push your repository to **GitHub**.
2. In the **Cloudflare Dashboard**, navigate to **Compute (Workers) > Pages > Connect to Git**.
3. Select your repository `moss-ladder-website`.
4. Configure build settings:
   - **Framework Preset:** Astro (or None)
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Node.js Version:** `22.23.4` (set via Environment Variable `NODE_VERSION=22` if needed)
5. Set Environment Variables (optional for previews, mandatory for custom domain):
   - `SITE_URL` = `https://your-custom-domain.com` (or leave default for `*.pages.dev`)
6. Click **Save and Deploy**.

---

## 7. Connecting a Custom Domain

1. In Cloudflare Pages, go to **Custom Domains > Set up a domain**.
2. Enter your registered domain (e.g. `mossladder.com` or `www.mossladder.com`).
3. Follow the DNS instructions (Cloudflare manages SSL/TLS certificates automatically).
4. Update `SITE_URL` in Cloudflare Pages environment variables to `https://mossladder.com`.

---

## 8. Portfolio Directory & Products

To add, edit, or archive products in the portfolio, refer to [`ADDING_PRODUCTS.md`](./ADDING_PRODUCTS.md). Adding a single typed record in `src/data/products.ts` automatically generates:
- Dedicated product specification page at `/products/[slug]/`
- Updated interactive search & filter directory at `/products/`
- Populated category archives at `/products/category/[slug]/`
- XML sitemap entries and Schema.org structured data.

---

## 9. Pre-Launch Verification

Before public launch, follow the detailed checklist in [`PRELAUNCH_CHECKLIST.md`](./PRELAUNCH_CHECKLIST.md).
