export type DemoProduct = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  collection: 'Women' | 'Kids' | 'Baby';
  price: number;
  compareAtPrice?: number;
  images: string[];
  variants: { id: string; label: string; price: number; stock: number }[];
  sizes: string[];
  colors: string[];
};

export const demoProducts: DemoProduct[] = [
  {
    id: 'aurora-dress',
    title: 'Aurora Silk Midi Dress',
    subtitle: 'Hand-pleated silk with pearl buttons',
    slug: 'aurora-silk-midi-dress',
    collection: 'Women',
    price: 35000,
    compareAtPrice: 42000,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'aurora-xs', label: 'XS', price: 35000, stock: 8 },
      { id: 'aurora-s', label: 'S', price: 35000, stock: 12 },
      { id: 'aurora-m', label: 'M', price: 35000, stock: 10 }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Rose Dust']
  },
  {
    id: 'celeste-blouse',
    title: 'Celeste Organza Blouse',
    subtitle: 'Sheer layered organza with satin trim',
    slug: 'celeste-organza-blouse',
    collection: 'Women',
    price: 21000,
    images: [
      'https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'celeste-xs', label: 'XS', price: 21000, stock: 5 },
      { id: 'celeste-s', label: 'S', price: 21000, stock: 7 },
      { id: 'celeste-m', label: 'M', price: 21000, stock: 4 }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne']
  },
  {
    id: 'luna-girl-dress',
    title: 'Luna Tulle Party Dress',
    subtitle: 'Layered tulle with hand-embroidered florals',
    slug: 'luna-tulle-party-dress',
    collection: 'Kids',
    price: 14500,
    images: [
      'https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'luna-4y', label: '4Y', price: 14500, stock: 6 },
      { id: 'luna-6y', label: '6Y', price: 14500, stock: 3 },
      { id: 'luna-8y', label: '8Y', price: 14500, stock: 5 }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    colors: ['Rose Dust']
  },
  {
    id: 'noor-baby-set',
    title: 'Noor Cashmere Baby Set',
    subtitle: 'Two-piece cashmere set with bonnet',
    slug: 'noor-cashmere-baby-set',
    collection: 'Baby',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1504159506876-0f71d8f5d0b0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'noor-3m', label: '3M', price: 18000, stock: 9 },
      { id: 'noor-6m', label: '6M', price: 18000, stock: 10 },
      { id: 'noor-9m', label: '9M', price: 18000, stock: 7 }
    ],
    sizes: ['3M', '6M', '9M'],
    colors: ['Cream']
  },
  {
    id: 'siena-wrap',
    title: 'Siena Silk Wrap Dress',
    subtitle: 'Bias-cut wrap with sash belt',
    slug: 'siena-silk-wrap-dress',
    collection: 'Women',
    price: 32000,
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'siena-s', label: 'S', price: 32000, stock: 8 },
      { id: 'siena-m', label: 'M', price: 32000, stock: 6 },
      { id: 'siena-l', label: 'L', price: 32000, stock: 4 }
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Rosewood']
  },
  {
    id: 'amelie-trench',
    title: 'Amelie Trench Coat',
    subtitle: 'Water-repellent cotton with satin lining',
    slug: 'amelie-trench-coat',
    collection: 'Women',
    price: 41000,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'amelie-s', label: 'S', price: 41000, stock: 5 },
      { id: 'amelie-m', label: 'M', price: 41000, stock: 3 },
      { id: 'amelie-l', label: 'L', price: 41000, stock: 2 }
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Sand']
  },
  {
    id: 'mirabelle-set',
    title: 'Mirabelle Matching Set',
    subtitle: 'Cotton-linen top and skirt duo',
    slug: 'mirabelle-matching-set',
    collection: 'Kids',
    price: 12500,
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523365280197-f1783db9fe62?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'mirabelle-4y', label: '4Y', price: 12500, stock: 7 },
      { id: 'mirabelle-6y', label: '6Y', price: 12500, stock: 8 },
      { id: 'mirabelle-8y', label: '8Y', price: 12500, stock: 6 }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    colors: ['Blush']
  },
  {
    id: 'emma-playsuit',
    title: 'Emma Baby Playsuit',
    subtitle: 'Organic cotton with lace collar',
    slug: 'emma-baby-playsuit',
    collection: 'Baby',
    price: 9500,
    images: [
      'https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'emma-3m', label: '3M', price: 9500, stock: 8 },
      { id: 'emma-6m', label: '6M', price: 9500, stock: 8 },
      { id: 'emma-9m', label: '9M', price: 9500, stock: 6 }
    ],
    sizes: ['3M', '6M', '9M'],
    colors: ['Ivory']
  }
];
