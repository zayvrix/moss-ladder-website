export type ProductStatus = 'live' | 'in-development' | 'planned' | 'archived';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  status: ProductStatus;
  websiteUrl?: string;
  logoPath?: string;
  coverImagePath?: string;
  featured: boolean;
  tags?: string[];
  launchedAt?: string;
  updatedAt?: string;
  features?: string[];
  targetAudience?: string;
  problemSolved?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon?: string;
}
