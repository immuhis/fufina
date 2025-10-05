import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { demoProducts } from '@/lib/demo-data';
import { formatCurrency } from '@/lib/utils';
import { ProductSizeGuide } from '../(components)/product-size-guide';
import { AddToCartForm } from '../(components)/add-to-cart-form';
import { ProductHighlights } from '../(components)/product-highlights';
import { ProductReviews } from '../(components)/product-reviews';

export function generateStaticParams() {
  return demoProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = demoProducts.find((item) => item.slug === params.slug);
  if (!product) {
    return {};
  }
  return {
    title: product.title,
    description: product.subtitle
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = demoProducts.find((item) => item.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container-responsive grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-rose/10">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {product.images.map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`${product.title} view`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <ProductHighlights />
        <ProductReviews productId={product.id} />
      </section>
      <aside className="sticky top-32 space-y-6 rounded-2xl bg-white p-8 shadow-soft">
        <div className="space-y-3">
          <span className="rounded-full bg-rose/10 px-3 py-1 text-xs font-medium text-rose">
            {product.collection}
          </span>
          <h1 className="font-heading text-3xl text-charcoal">{product.title}</h1>
          <p className="text-sm text-charcoal/70">{product.subtitle}</p>
          <div className="flex items-center gap-3 text-lg">
            <span className="font-semibold text-charcoal">{formatCurrency(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-charcoal/40 line-through">
                {formatCurrency(product.compareAtPrice)}
              </span>
            ) : null}
          </div>
        </div>
        <AddToCartForm product={product} />
        <ProductSizeGuide />
        <div className="space-y-3 text-sm text-charcoal/70">
          <details className="rounded-xl border border-rose/20 bg-background/70 p-4" open>
            <summary className="cursor-pointer font-semibold text-charcoal">Delivery & Returns</summary>
            <p className="mt-3 text-sm text-charcoal/70">
              Complimentary EU shipping on orders over €200. Free returns within 30 days. Express delivery
              options available at checkout.
            </p>
          </details>
          <details className="rounded-xl border border-rose/20 bg-background/70 p-4">
            <summary className="cursor-pointer font-semibold text-charcoal">Fabric & Care</summary>
            <p className="mt-3 text-sm text-charcoal/70">
              Dry clean only. Crafted from ethically sourced silk and lined in organic cotton voile.
            </p>
          </details>
        </div>
      </aside>
    </div>
  );
}
