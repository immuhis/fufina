'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const sampleReviews = [
  {
    id: '1',
    author: 'Isabella M.',
    rating: 5,
    comment: 'The craftsmanship is exquisite and the packaging felt truly luxurious.',
    date: 'March 2024'
  },
  {
    id: '2',
    author: 'Chloé R.',
    rating: 4,
    comment: 'Gorgeous silhouette and fabric. Runs slightly small, size up.',
    date: 'February 2024'
  }
];

export function ProductReviews({ productId }: { productId: string }) {
  const [reviews] = useState(sampleReviews);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg text-charcoal">Client impressions</h2>
        <button type="button" className="btn-outline text-xs">
          Write a review
        </button>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <motion.article
            key={`${productId}-${review.id}`}
            className="rounded-2xl border border-rose/20 bg-white p-4 shadow-soft"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between text-sm">
              <div className="font-semibold text-charcoal">{review.author}</div>
              <span className="text-charcoal/50">{review.date}</span>
            </div>
            <div className="mt-2 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} aria-hidden className={index < review.rating ? 'text-rose' : 'text-rose/30'}>
                  ★
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-charcoal/70">{review.comment}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
