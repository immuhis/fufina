import Link from 'next/link';
import Image from 'next/image';
import { demoProducts } from '@/lib/demo-data';
import { formatCurrency } from '@/lib/utils';
import { QuickAddButton } from '@/components/sections/product/quick-add-button';

export const metadata = { title: 'Account · Wishlist' };

const wishlist = demoProducts.slice(0, 3);

export default function WishlistPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="font-heading text-2xl text-charcoal">Wishlist</h2>
        <p className="text-sm text-charcoal/60">Save pieces you love and move them to your bag anytime.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {wishlist.map((product) => (
          <article key={product.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft">
            <Link href={`/product/${product.slug}`} className="relative h-32 w-28 overflow-hidden rounded-xl">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="112px"
                className="object-cover"
              />
            </Link>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <Link href={`/product/${product.slug}`} className="font-heading text-lg text-charcoal">
                  {product.title}
                </Link>
                <p className="text-sm text-charcoal/60">{product.subtitle}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal">{formatCurrency(product.price)}</span>
                <QuickAddButton product={product} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
