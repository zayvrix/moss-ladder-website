import { describe, it, expect } from 'vitest';
import { companyConfig } from '../src/config/company';
import { primaryNavigation, footerNavigation } from '../src/config/navigation';

describe('Company Configuration & Brand Standards', () => {
  it('has canonical brand name "Moss Ladder" with exact capitalization', () => {
    expect(companyConfig.name).toBe('Moss Ladder');
    expect(companyConfig.wordmark).toBe('MOSS LADDER');
    expect(companyConfig.slug).toBe('moss-ladder');
  });

  it('contains approved tagline and positioning statements', () => {
    expect(companyConfig.tagline).toBe('Useful things, thoughtfully built.');
    expect(companyConfig.positioning).toContain('independent digital product brand');
  });

  it('correctly models legal operator without claiming fake corporate registration', () => {
    expect(companyConfig.legal.hasRegisteredEntity).toBe(false);
    expect(companyConfig.legal.operatorType).toBe('independent-brand');
    expect(companyConfig.legal.notice).toContain('independent');
    expect(companyConfig.legal.notice).toContain('financial');
  });

  it('correctly sets verified social handles and active contact mailboxes', () => {
    expect(companyConfig.social.youtube).toBe('https://youtube.com/@mossladder?si=0_pgeHH-kMOG_wb3');
    expect(companyConfig.social.instagram).toBe('https://www.instagram.com/moss.ladder?psln=MTZldjhzZzc5bGtsNA==');
    expect(companyConfig.social.x).toBe('https://x.com/Moss_Ladder');
    expect(companyConfig.social.linkedin).toContain('moss-ladder');
    expect(companyConfig.social.github).toBeUndefined();
    expect(companyConfig.contact.primaryEmail).toBe('contact@mossladder.com');
    expect(companyConfig.contact.supportEmail).toBe('support@mossladder.com');
    expect(companyConfig.contact.partnershipsEmail).toBe('partnerships@mossladder.com');
  });

  it('has valid primary navigation links with trailing slashes', () => {
    expect(primaryNavigation.length).toBeGreaterThan(0);
    for (const item of primaryNavigation) {
      expect(item.href.startsWith('/')).toBe(true);
      expect(item.href.endsWith('/')).toBe(true);
      expect(item.label.length).toBeGreaterThan(0);
    }
  });

  it('has valid footer navigation structure', () => {
    expect(footerNavigation.products.length).toBeGreaterThan(0);
    expect(footerNavigation.company.length).toBeGreaterThan(0);
    expect(footerNavigation.legal.length).toBeGreaterThan(0);
  });
});
