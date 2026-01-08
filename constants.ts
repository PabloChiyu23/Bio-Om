import { Product, BlogPost, SubscriptionPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bio-Om Isotónica 600ml',
    description: 'Agua de mar diluida a la isotonía corporal. Lista para beber y rehidratar.',
    price: 35.00,
    category: 'isotonic',
    imageUrl: 'https://images.unsplash.com/photo-1613214149922-f1809c99e272?auto=format&fit=crop&q=80&w=800', // Placeholder resembling water bottle
    size: '600ml'
  },
  {
    id: '2',
    name: 'Bio-Om Hipertónica 1L',
    description: 'Agua de mar pura microfiltrada. Ideal para cocinar o diluir en casa.',
    price: 80.00,
    category: 'hypertonic',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-011141951516?auto=format&fit=crop&q=80&w=800',
    size: '1 Litro'
  },
  {
    id: '3',
    name: 'Galón Bio-Om',
    description: 'Presentación familiar de agua de mar pura. Economía y salud para todos.',
    price: 250.00,
    category: 'hypertonic',
    imageUrl: 'https://images.unsplash.com/photo-1549480644-84d4138e6530?auto=format&fit=crop&q=80&w=800',
    size: '3.78 Litros'
  },
  {
    id: '4',
    name: 'Spray Refrescante Facial',
    description: 'Agua de mar nebulizada para hidratar la piel y limpiar impurezas.',
    price: 120.00,
    category: 'cosmetic',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    size: '150ml'
  },
  {
    id: '5',
    name: 'Sales Marinas Bio-Om',
    description: 'Sales extraídas artesanalmente, ricas en magnesio y oligoelementos.',
    price: 95.00,
    category: 'salts',
    imageUrl: 'https://images.unsplash.com/photo-1616409605481-c75c5b96720f?auto=format&fit=crop&q=80&w=800',
    size: '500g'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  { id: 'sub-weekly', name: 'Semanal', frequency: 'weekly', discount: 0.15, label: 'Cada Semana (-15%)' },
  { id: 'sub-monthly', name: 'Mensual', frequency: 'monthly', discount: 0.10, label: 'Cada Mes (-10%)' },
  { id: 'sub-quarterly', name: 'Trimestral', frequency: 'quarterly', discount: 0.05, label: 'Cada 3 Meses (-5%)' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Beneficios del Agua de Mar para Deportistas',
    excerpt: 'Descubre cómo el agua isotónica puede mejorar tu recuperación muscular y rehidratación mejor que las bebidas comerciales.',
    content: 'Full article content would go here...',
    author: 'Dr. Bio-Om',
    date: '10 Oct 2023',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min'
  },
  {
    id: '2',
    title: '¿Qué es el Plasma de Quinton?',
    excerpt: 'Una mirada histórica a René Quinton y sus descubrimientos sobre la similitud entre el agua de mar y nuestro plasma sanguíneo.',
    content: 'Full article content would go here...',
    author: 'Ana Salud',
    date: '25 Sep 2023',
    imageUrl: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Cocina Saludable con Agua de Mar',
    excerpt: 'Aprende a usar agua de mar hipertónica para sazonar tus alimentos de forma natural, reduciendo el sodio refinado.',
    content: 'Full article content would go here...',
    author: 'Chef Marino',
    date: '12 Sep 2023',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min'
  }
];