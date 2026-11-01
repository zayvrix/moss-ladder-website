// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Default to production domain mossladder.com, configurable via SITE_URL environment variable
const siteUrl = process.env.SITE_URL || 'https://mossladder.com';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
