import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { CollectionsShowcase } from '@/components/sections/collections-showcase';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="container-responsive grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full bg-rose/10 px-4 py-1 text-sm font-medium text-rose">
            New Season — Spring Reverie
          </p>
          <h1 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl lg:text-6xl">
            Delicate silhouettes for cherished moments.
          </h1>
          <p className="text-lg text-charcoal/70">
            Discover Fufina Boutique&apos;s curated edits for women, kids, and babies. Crafted in premium
            fabrics with European-inspired detailing and a touch of modern romance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/catalog" className="btn-primary">
              Explore Collection
            </Link>
            <Link href="/size-guide" className="btn-outline">
              Size Guide
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-xl bg-rose/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Elegant mother and child wearing Fufina outfits"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      <CollectionsShowcase />
      <FeaturedProducts />

      <section className="container-responsive rounded-2xl bg-white p-10 shadow-soft lg:p-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Luxury gifting, simplified.</h2>
            <p className="mt-4 text-base text-charcoal/70">
              Personalised wrapping, handwritten notes, and worldwide express delivery for celebrations of
              every kind.
            </p>
            <Link href="/contact" className="btn-outline mt-6 inline-flex">
              Concierge Services
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Complimentary tailoring', description: 'Alterations on select pieces.' },
              { title: 'Extended returns', description: '30-day returns with easy pickup.' },
              { title: 'Priority shipping', description: 'Next-day delivery in major EU cities.' },
              { title: 'Secure payments', description: 'Stripe, Apple Pay, Google Pay supported.' }
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-rose/20 bg-background/60 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-heading text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
