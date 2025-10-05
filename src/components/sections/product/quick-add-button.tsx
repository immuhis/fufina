'use client';

import { motion } from 'framer-motion';
import { addToCart } from '@/lib/hooks/use-cart-store';
import type { DemoProduct } from '@/lib/demo-data';

export function QuickAddButton({ product }: { product: DemoProduct }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        addToCart({
          id: `${product.id}-default`,
          variantId: product.variants[0].id,
          name: product.title,
          image: product.images[0],
          variant: product.variants[0].label,
          price: product.variants[0].price,
          quantity: 1
        })
      }
      className="inline-flex items-center justify-center rounded-full border border-rose bg-white px-4 py-2 text-xs font-semibold text-rose transition hover:bg-rose hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      Quick add
    </motion.button>
  );
}
