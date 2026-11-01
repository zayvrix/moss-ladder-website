/**
 * Central Brand and Operator Configuration for Moss Ladder
 * 
 * All user-facing brand text, canonical metadata, contact endpoints,
 * and operational settings are derived from this single source of truth.
 */

export interface CompanyConfig {
  /** Canonical brand name (exact capitalization in prose) */
  name: string;
  /** Capitalized wordmark for high-contrast/header displays */
  wordmark: string;
  /** Slug used in URLs and identifiers */
  slug: string;
  /** Primary brand tagline */
  tagline: string;
  /** Secondary headline */
  headline: string;
  /** Concise official brand positioning statement */
  positioning: string;
  /** Longer editorial summary for metadata and about pages */
  description: string;
  /**
   * Site base URL.
   * Derived from environment variable SITE_URL or defaults to Cloudflare Pages preview.
   * Do not assume mossladder.com is purchased or connected until configured.
   */
  siteUrl: string;
  /** Provisional candidate domain for owner reference */
  provisionalDomain: string;
  /**
   * Legal operator definition.
   * Currently operated by an independent creator/operator.
   * Update when legal entity (LLC, etc.) is formally registered.
   */
  legal: {
    operatorType: 'independent-brand' | 'registered-entity';
    operatorName: string;
    hasRegisteredEntity: boolean;
    jurisdiction?: string;
    notice: string;
  };
  /** Contact configuration */
  contact: {
    /** Primary contact email address */
    primaryEmail?: string;
    /** Support alias */
    supportEmail?: string;
    /** Partnerships alias */
    partnershipsEmail?: string;
    /** Fallback mailto address */
    fallbackEmail: string;
    /** Whether real backend form processing is active */
    hasActiveFormBackend: boolean;
  };
  /**
   * Verified social links only.
   * Handles are verified and owned by Moss Ladder.
   */
  social: {
    github?: string;
    x?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
  /** Product footer attribution standard */
  attributionText: string;
}

const envSiteUrl = import.meta.env.SITE_URL || (typeof process !== 'undefined' ? process.env?.SITE_URL : undefined);

export const companyConfig: CompanyConfig = {
  name: 'Moss Ladder',
  wordmark: 'MOSS LADDER',
  slug: 'moss-ladder',
  tagline: 'Useful things, thoughtfully built.',
  headline: 'Digital products built for real decisions.',
  positioning:
    'Moss Ladder is an independent digital product brand developing practical software, online tools, and thoughtfully designed web experiences.',
  description:
    'Moss Ladder builds independent digital tools and web products that turn complicated tasks into clearer, more practical experiences. Starting with precision financial calculators and expanding into utility software.',
  siteUrl: envSiteUrl ? envSiteUrl.replace(/\/+$/, '') : 'https://mossladder.com',
  provisionalDomain: 'mossladder.com',
  legal: {
    operatorType: 'independent-brand',
    operatorName: 'Moss Ladder Digital Products',
    hasRegisteredEntity: false,
    notice:
      'Moss Ladder is an independently owned and operated digital product brand and studio. Independent product tools do not provide licensed legal, financial, or tax advice.',
  },
  contact: {
    primaryEmail: 'contact@mossladder.com',
    supportEmail: 'support@mossladder.com',
    partnershipsEmail: 'partnerships@mossladder.com',
    fallbackEmail: 'contact@mossladder.com',
    hasActiveFormBackend: false,
  },
  social: {
    youtube: 'https://youtube.com/@mossladder?si=0_pgeHH-kMOG_wb3',
    instagram: 'https://www.instagram.com/moss.ladder?psln=MTZldjhzZzc5bGtsNA==',
    x: 'https://x.com/Moss_Ladder',
    linkedin: 'https://www.linkedin.com/in/moss-ladder-a7136b448?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: undefined,
  },
  attributionText: 'A Moss Ladder digital product',
};
