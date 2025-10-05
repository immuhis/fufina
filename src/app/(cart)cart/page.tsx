'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore, clearCart } from '@/lib/hooks/use-cart-store';
import { formatCurrency } from '@/lib/utils';

export const metadata = {
  title: 'Shopping Bag'
};

export default function CartPage() {
  const { items, subtotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container-responsive space-y-6 text-center">
        <h1 className="section-title">Your bag is empty</h1>
        <p className="text-sm text-charcoal/70">Discover our new arrivals and add your favourites.</p>
        <Link href="/catalog" className="btn-primary mx-auto w-fit">
          Explore catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="container-responsive grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={140}
              sizes="120px"
              className="rounded-xl object-cover"
            />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h2 className="font-heading text-lg text-charcoal">{item.name}</h2>
                <p className="text-sm text-charcoal/60">{item.variant}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-charcoal/70">
                <span>Qty {item.quantity}</span>
                <span className="font-semibold text-charcoal">{formatCurrency(item.price * item.quantity)}</span>
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={clearCart} className="btn-outline">
          Clear bag
        </button>
      </section>
      <aside className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-xl text-charcoal">Order summary</h2>
        <div className="space-y-2 text-sm text-charcoal/70">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-charcoal">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Estimated taxes</span>
            <span className="text-charcoal/60">Calculated at checkout</span>
          </div>
        </div>
        <Link href="/checkout" className="btn-primary w-full">
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
