// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Default to a configurable preview/production URL, fallback to Cloudflare Pages domain
const siteUrl = process.env.SITE_URL || 'https://moss-ladder.pages.dev';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
