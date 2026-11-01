import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'rothprorata',
    slug: 'rothprorata',
    name: 'RothProRata',
    shortDescription: 'Interactive Backdoor Roth IRA pro-rata tax calculator and educational scenario modeler.',
    description:
      'RothProRata is a focused educational calculator that models the IRS pro-rata rule for Backdoor Roth IRA conversions. It helps individuals and advisors calculate taxable vs. non-taxable distribution ratios across traditional, SEP, and SIMPLE IRA balances before initiating conversions.',
    categoryId: 'finance-tax',
    status: 'live',
    websiteUrl: 'https://rothprorata.com',
    logoPath: '/brand/products/rothprorata-icon.svg',
    coverImagePath: '/brand/products/rothprorata-screen.png',
    featured: true,
    tags: ['Roth IRA', 'Pro-Rata Rule', 'Tax Planning', 'Retirement'],
    launchedAt: '2024-01-15',
    updatedAt: '2025-06-01',
    features: [
      'Instant aggregate IRA balance and basis ratio calculations',
      'Clear visualization of taxable vs. tax-free conversion amounts',
      'Year-end balance impact simulation (December 31 balance timing)',
      '100% client-side computation with strict privacy (no financial data transmitted or stored)',
    ],
    targetAudience: 'High-earning professionals, individual investors executing backdoor conversions, and tax advisors.',
    problemSolved:
      'The IRS aggregate pro-rata rule across all pre-tax IRAs frequently triggers unintended tax bills when investors make non-deductible contributions while retaining pre-tax balances. RothProRata provides instant calculation clarity before money moves.',
  },
  {
    id: 'irmaa-clarity',
    slug: 'irmaa-clarity',
    name: 'IRMAA Clarity',
    shortDescription: 'Medicare Part B and Part D Income-Related Monthly Adjustment Amount tier projection tool.',
    description:
      'IRMAA Clarity is a planned calculation platform designed to model Medicare IRMAA surcharge brackets based on modified adjusted gross income (MAGI). It helps retirees and financial planners forecast surcharge tier cliffs, lookback periods, and appeal scenarios.',
    categoryId: 'finance-tax',
    status: 'planned',
    logoPath: '/brand/products/irmaa-icon.svg',
    featured: true,
    tags: ['Medicare', 'IRMAA', 'Healthcare Planning', 'Retirement'],
    features: [
      'Medicare Part B and Part D surcharge bracket tier modeling',
      '2-year tax return MAGI lookback threshold analysis',
      'Cliff avoidance calculations to prevent jumping into higher surcharge tiers',
      'Life-changing event (Form SSA-44) appeal guidance preview',
    ],
    targetAudience: 'Retirees approaching age 65+, financial planners, and tax strategists.',
    problemSolved:
      'Crossing an IRMAA income cliff by even one dollar results in a substantial annual surcharge penalty. IRMAA Clarity provides exact visibility into surcharge tiers before annual income is finalized.',
  },
  {
    id: 'optiamt',
    slug: 'optiamt',
    name: 'OptiAMT',
    shortDescription: 'Alternative Minimum Tax threshold analysis and incentive stock option exercise planner.',
    description:
      'OptiAMT is a planned computational planning tool to calculate tentative minimum tax, AMT exemption phase-outs, and allowable ISO exercise headroom without triggering unexpected AMT liabilities.',
    categoryId: 'finance-tax',
    status: 'planned',
    logoPath: '/brand/products/optiamt-icon.svg',
    featured: false,
    tags: ['AMT', 'Stock Options', 'Equity Compensation', 'Tax Strategy'],
    features: [
      'AMT exemption threshold and phase-out rate computation',
      'ISO exercise spread computation and break-even headroom modeling',
      'Prior-year minimum tax credit (Form 8801) tracking preview',
      'Multi-year AMT offset projections',
    ],
    targetAudience: 'Startup employees and tech workers holding Incentive Stock Options (ISOs).',
    problemSolved:
      'Exercising ISOs often triggers phantom income under the Alternative Minimum Tax without cash to pay the tax. OptiAMT models the safe exercise threshold for any tax year.',
  },
  {
    id: 'supplemental-wage-tax-calculator',
    slug: 'supplemental-wage-tax-calculator',
    name: 'Supplemental Wage Tax Calculator',
    shortDescription: 'Precision bonus, equity vesting, and supplemental wage withholding analyzer.',
    description:
      'A planned payroll withholding analyzer comparing aggregate vs. flat percentage withholding rules on bonuses, stock vesting, and severance to prevent tax-season underwithholding surprises.',
    categoryId: 'finance-tax',
    status: 'planned',
    logoPath: '/brand/products/supplemental-icon.svg',
    featured: false,
    tags: ['Payroll', 'Bonus Withholding', 'RSU', 'Tax Calculator'],
    features: [
      'Statutory flat rate (22% vs. 37% over $1M) comparative analysis',
      'Aggregate method payroll withholding simulation',
      'Dual-state and local supplemental tax estimate calculation',
      'Net take-home pay breakdown after all mandatory withholdings',
    ],
    targetAudience: 'Employees receiving bonuses, commissions, or RSU vestings.',
    problemSolved:
      'Standard 22% flat bonus withholding is frequently insufficient for higher income brackets, creating painful tax surprises in April. This tool calculates the exact withholding gap.',
  },
  {
    id: 'scorp-reasonable-salary',
    slug: 'scorp-reasonable-salary',
    name: 'S-Corp Reasonable Salary Calculator',
    shortDescription: 'Methodology-driven compensation modeler for S-Corporation owner-operators.',
    description:
      'A planned compensation-planning tool providing multi-factor evaluation of officer compensation vs. shareholder distributions in alignment with IRS reasonable compensation standards.',
    categoryId: 'finance-tax',
    status: 'planned',
    logoPath: '/brand/products/scorp-icon.svg',
    featured: false,
    tags: ['S-Corp', 'Officer Compensation', 'Self-Employment Tax', 'Small Business'],
    features: [
      'Multi-factor wage benchmarking by role, time allocation, and geographic market',
      'Distribution vs. W-2 salary tax optimization breakdown',
      'Defensible methodology documentation for corporate tax records',
      'FICA tax savings projections against compliance risk levels',
    ],
    targetAudience: 'Small business owners, solo consultants, and CPAs advising S-Corporations.',
    problemSolved:
      'Setting owner-employee salary too low risks severe IRS recharacterization penalties, while setting it too high wastes thousands in FICA payroll taxes. This tool provides defensible compensation modeling.',
  },
];
