import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const collections = [
  {
    name: 'Women',
    href: '/collections/women',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'Sophisticated tailoring and ethereal dresses for day-to-evening elegance.'
  },
  {
    name: 'Kids',
    href: '/collections/kids',
    image:
      'https://images.unsplash.com/photo-1617043786385-96bb1048f8c6?auto=format&fit=crop&w=900&q=80',
    description: 'Playful separates and occasionwear designed for comfort and charm.'
  },
  {
    name: 'Baby',
    href: '/collections/baby',
    image:
      'https://images.unsplash.com/photo-1601049676869-702ea24cfd3f?auto=format&fit=crop&w=900&q=80',
    description: 'Gentle fabrics and thoughtful details for the littlest loves.'
  }
];

export function CollectionsShowcase() {
  return (
    <section className="container-responsive">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Curated collections</h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/70">
            Explore signature edits for every stage of life. Each collection is designed with premium
            fabrics, graceful silhouettes, and delicate embellishments.
          </p>
        </div>
        <Link href="/catalog" className="btn-outline self-start">
          View all products
        </Link>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <motion.article
            key={collection.name}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-heading text-2xl text-charcoal">{collection.name}</h3>
              <p className="text-sm text-charcoal/70">{collection.description}</p>
              <Link href={collection.href} className="inline-flex items-center gap-2 text-sm font-semibold text-rose">
                Discover {collection.name}
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
