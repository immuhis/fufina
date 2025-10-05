import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';
import { QuickAddButton } from '@/components/sections/product/quick-add-button';
import { demoProducts } from '@/lib/demo-data';

export function FeaturedProducts() {
  const featured = demoProducts.slice(0, 4);

  return (
    <section className="container-responsive">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Featured pieces</h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/70">
            A selection of this season&apos;s most-loved silhouettes across women, kids, and baby.
          </p>
        </div>
        <Link href="/catalog" className="btn-outline self-start">
          Shop the edit
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <motion.article
            key={product.id}
            className="card group overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              {product.images[1] ? (
                <Image
                  src={product.images[1]}
                  alt={`${product.title} alternate view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="absolute inset-0 hidden object-cover opacity-0 transition duration-700 group-hover:opacity-100 sm:block"
                />
              ) : null}
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg text-charcoal">{product.title}</h3>
                <span className="rounded-full bg-rose/10 px-3 py-1 text-xs font-medium text-rose">
                  {product.collection}
                </span>
              </div>
              <p className="text-sm text-charcoal/70">{product.subtitle}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-charcoal">
                    {formatCurrency(product.price)}
                  </span>
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
    </section>
  );
}
