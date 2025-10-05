'use client';

import { useState } from 'react';
import { addToCart } from '@/lib/hooks/use-cart-store';
import type { DemoProduct } from '@/lib/demo-data';

export function AddToCartForm({ product }: { product: DemoProduct }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        addToCart({
          id: `${product.id}-${variant.id}`,
          variantId: variant.id,
          name: product.title,
          image: product.images[0],
          variant: variant.label,
          price: variant.price,
          quantity: 1
        });
      }}
    >
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-charcoal">Size</legend>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((option) => (
            <label key={option.id} className="cursor-pointer">
              <input
                type="radio"
                name="size"
                value={option.id}
                className="peer sr-only"
                checked={variantId === option.id}
                onChange={() => setVariantId(option.id)}
              />
              <span className="inline-flex min-w-[64px] items-center justify-center rounded-full border border-rose/30 px-4 py-2 text-sm font-medium text-charcoal transition peer-checked:border-rose peer-checked:bg-rose peer-checked:text-white">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="btn-primary w-full">
        Add to cart
      </button>
    </form>
  );
}
