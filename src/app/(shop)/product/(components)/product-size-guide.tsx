'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

export function ProductSizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="btn-outline w-full">
          Size chart
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <motion.div
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-soft"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Dialog.Title className="font-heading text-2xl text-charcoal">Size guide</Dialog.Title>
          <p className="mt-3 text-sm text-charcoal/70">
            Measurements are in centimeters. Choose the size closest to your body measurements for a tailored
            fit.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-rose/20">
            <table className="w-full text-left text-sm">
              <thead className="bg-rose/10 font-semibold text-charcoal">
                <tr>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Bust</th>
                  <th className="px-4 py-3">Waist</th>
                  <th className="px-4 py-3">Hips</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['XS', '80', '62', '88'],
                  ['S', '84', '66', '92'],
                  ['M', '90', '72', '98'],
                  ['L', '96', '78', '104']
                ].map((row) => (
                  <tr key={row[0]} className="odd:bg-white even:bg-background/60">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 text-charcoal/80">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
