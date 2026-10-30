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
    /** Primary contact email address. Set once configured with DNS/mail host */
    primaryEmail?: string;
    /** Support alias */
    supportEmail?: string;
    /** Partnerships alias */
    partnershipsEmail?: string;
    /** Fallback mailto address if domain email is pending */
    fallbackEmail: string;
    /** Whether real backend form processing is active */
    hasActiveFormBackend: boolean;
  };
  /**
   * Verified social links only.
   * Leave empty or undefined until handles are verified and owned.
   * Never render guessed account URLs.
   */
  social: {
    github?: string;
    x?: string;
    linkedin?: string;
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
  siteUrl: envSiteUrl ? envSiteUrl.replace(/\/+$/, '') : 'https://moss-ladder.pages.dev',
  provisionalDomain: 'mossladder.com',
  legal: {
    operatorType: 'independent-brand',
    operatorName: 'Moss Ladder Digital Products',
    hasRegisteredEntity: false,
    notice:
      'Moss Ladder is an independently operated digital product brand and studio. Independent product tools do not provide licensed legal, financial, or tax advice.',
  },
  contact: {
    // Leave undefined until mailbox is active on the verified production domain
    primaryEmail: undefined,
    supportEmail: undefined,
    partnershipsEmail: undefined,
    fallbackEmail: 'contact@mossladder.com',
    hasActiveFormBackend: false,
  },
  social: {
    // Only set when accounts are verified and secured
    github: undefined,
    x: undefined,
    linkedin: undefined,
  },
  attributionText: 'A Moss Ladder digital product',
};
