export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const primaryNavigation: NavItem[] = [
  { label: 'Products', href: '/products/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNavigation = {
  products: [
    { label: 'All Products', href: '/products/' },
    { label: 'RothProRata (Live)', href: '/products/rothprorata/' },
    { label: 'Finance & Tax Tools', href: '/products/category/finance-tax/' },
  ],
  company: [
    { label: 'About Moss Ladder', href: '/about/' },
    { label: 'Contact & Support', href: '/contact/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Use', href: '/terms/' },
  ],
};
