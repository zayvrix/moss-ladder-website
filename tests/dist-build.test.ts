import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

describe('Production Build Output Verification', () => {
  const distDir = path.resolve(process.cwd(), 'dist');

  beforeAll(() => {
    if (!fs.existsSync(distDir) || !fs.existsSync(path.join(distDir, 'index.html'))) {
      execSync('npm run build', { stdio: 'pipe' });
    }
  }, 30000);

  it('dist directory exists', () => {
    expect(fs.existsSync(distDir)).toBe(true);
  });

  it('contains all required top-level HTML routes', () => {
    const requiredFiles = [
      'index.html',
      'about/index.html',
      'contact/index.html',
      'products/index.html',
      'privacy/index.html',
      'terms/index.html',
      '404.html',
    ];

    for (const file of requiredFiles) {
      const filePath = path.join(distDir, file);
      expect(fs.existsSync(filePath), `Missing required build page: ${file}`).toBe(true);
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(content.toLowerCase()).toContain('<!doctype html>');
      expect(content.toUpperCase()).toContain('MOSS LADDER');
      expect(content).toContain('Skip to main content');
    }
  });

  it('contains generated product detail routes', () => {
    const productRoutes = [
      'products/rothprorata/index.html',
      'products/irmaa-clarity/index.html',
      'products/optiamt/index.html',
      'products/supplemental-wage-tax-calculator/index.html',
      'products/scorp-reasonable-salary/index.html',
    ];

    for (const route of productRoutes) {
      const filePath = path.join(distDir, route);
      expect(fs.existsSync(filePath), `Missing product detail page: ${route}`).toBe(true);
    }
  });

  it('contains populated category route and no empty category routes', () => {
    const populatedRoute = path.join(distDir, 'products/category/finance-tax/index.html');
    expect(fs.existsSync(populatedRoute)).toBe(true);

    const emptyRoute = path.join(distDir, 'products/category/productivity/index.html');
    expect(fs.existsSync(emptyRoute)).toBe(false);
  });

  it('contains valid sitemap and robots.txt', () => {
    expect(fs.existsSync(path.join(distDir, 'sitemap-index.xml'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'robots.txt'))).toBe(true);
  });

  it('contains brand vector assets', () => {
    expect(fs.existsSync(path.join(distDir, 'favicon.svg'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'brand/moss-ladder-symbol.svg'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'brand/moss-ladder-wordmark.svg'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'brand/og-image.svg'))).toBe(true);
  });
});
