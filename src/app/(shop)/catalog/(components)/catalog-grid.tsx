import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { DemoProduct } from '@/lib/demo-data';
import { formatCurrency } from '@/lib/utils';
import { QuickAddButton } from '@/components/sections/product/quick-add-button';

export function CatalogGrid({ products }: { products: DemoProduct[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <motion.article
          key={product.id}
          className="card group overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link href={`/product/${product.slug}`} className="block">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              {product.images[1] ? (
                <Image
                  src={product.images[1]}
                  alt={`${product.title} alternate view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="absolute inset-0 hidden object-cover opacity-0 transition duration-700 group-hover:opacity-100 sm:block"
                />
              ) : null}
            </div>
          </Link>
          <div className="space-y-3 p-6">
            <div className="flex items-center justify-between">
              <Link href={`/product/${product.slug}`} className="font-heading text-lg text-charcoal">
                {product.title}
              </Link>
              <span className="rounded-full bg-rose/10 px-3 py-1 text-xs font-medium text-rose">
                {product.collection}
              </span>
            </div>
            <p className="text-sm text-charcoal/70">{product.subtitle}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-charcoal">{formatCurrency(product.price)}</span>
                {product.compareAtPrice ? (
                  <span className="text-charcoal/40 line-through">
                    {formatCurrency(product.compareAtPrice)}
                  </span>
                ) : null}
              </div>
              <QuickAddButton product={product} />
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
