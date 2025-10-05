export const dynamic = 'error';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Thoughtful gifting',
    description: 'Handwritten notes and bespoke wrapping to celebrate every milestone.'
  },
  {
    title: 'Timeless tailoring',
    description: 'Seasonal edits crafted with European fabrics and modern silhouettes.'
  },
  {
    title: 'Express delivery',
    description: 'Fast, reliable shipping across Europe with real-time tracking.'
  }
];

export default function HomePage() {
  return (
    <main className="space-y-24 bg-background pb-24">
      <section className="container-responsive overflow-hidden rounded-3xl bg-white shadow-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 p-10 lg:p-16">
            <span className="inline-flex items-center rounded-full bg-rose/10 px-4 py-1 text-sm font-medium text-rose">
              Fufina Boutique
            </span>
            <h1 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl lg:text-6xl">
              Elegance for women, kids, and little ones.
            </h1>
            <p className="text-base text-charcoal/70">
              Discover a curated wardrobe of romantic dresses, cozy layers, and heirloom-quality accessories
              designed for cherished family moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-primary">
                Explore the catalog
              </Link>
              <Link href="/collections/women" className="btn-outline">
                Shop women&apos;s collection
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
              alt="Model wearing Fufina Boutique apparel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-responsive grid gap-8 rounded-3xl bg-white/60 p-10 backdrop-blur">
        <h2 className="section-title">Why families love Fufina</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-rose/20 bg-white p-6">
              <h3 className="font-heading text-xl text-charcoal">{feature.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
