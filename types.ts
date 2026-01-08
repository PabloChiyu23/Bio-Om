export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'isotonic' | 'hypertonic' | 'cosmetic' | 'salts';
  imageUrl: string;
  size: string;
}

export interface CartItem extends Product {
  quantity: number;
  subscriptionFrequency?: 'weekly' | 'monthly' | 'quarterly' | null;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export type SubscriptionPlan = {
  id: string;
  name: string;
  frequency: 'weekly' | 'monthly' | 'quarterly';
  discount: number; // percentage (e.g., 0.10 for 10%)
  label: string;
};