'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  {
    title: 'Collection',
    options: ['Women', 'Kids', 'Baby']
  },
  {
    title: 'Size',
    options: ['XS', 'S', 'M', 'L', '3M', '6M', '9M', '4Y', '6Y', '8Y']
  },
  {
    title: 'Color',
    options: ['Rose Dust', 'Champagne', 'Cream', 'Blush', 'Ivory']
  }
];

export function CatalogFilters() {
  const [expanded, setExpanded] = useState<string | null>('Collection');

  return (
    <div className="space-y-4">
      {filters.map((filter) => (
        <div key={filter.title} className="rounded-xl border border-rose/20 bg-background/60 p-4">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left text-sm font-semibold text-charcoal"
            onClick={() => setExpanded((prev) => (prev === filter.title ? null : filter.title))}
            aria-expanded={expanded === filter.title}
          >
            <span>{filter.title}</span>
            <span aria-hidden>{expanded === filter.title ? '−' : '+'}</span>
          </button>
          <AnimatePresence initial={false}>
            {expanded === filter.title ? (
              <motion.ul
                className="mt-3 space-y-2 text-sm text-charcoal/70"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {filter.options.map((option) => (
                  <li key={option}>
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" className="rounded border-rose/30 text-rose" />
                      <span>{option}</span>
                    </label>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
