'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/lib/hooks/use-cart-store';

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, subtotal } = useCartStore();

  return (
    <AnimatePresence>
      {open ? (
        <Dialog.Root
          open={open}
          onOpenChange={(next) => {
            if (!next) {
              onClose();
            }
          }}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
            <motion.div
              id="mini-cart"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white p-6 shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between">
                <Dialog.Title className="font-heading text-xl font-semibold text-charcoal">
                  Shopping Bag
                </Dialog.Title>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-transparent p-2 hover:border-rose"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                {items.length === 0 ? (
                  <p className="text-sm text-charcoal/70">
                    Your cart is empty. Explore our collection to add beautiful pieces.
                  </p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-lg border border-rose/10 p-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={100}
                        sizes="80px"
                        className="rounded-md object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-charcoal">{item.name}</h3>
                          <p className="text-sm text-charcoal/60">
                            {item.variant} · Qty {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-rose">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6 space-y-4 border-t border-rose/10 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-charcoal/70">Subtotal</span>
                  <span className="font-semibold text-charcoal">{formatCurrency(subtotal)}</span>
                </div>
                <p className="text-xs text-charcoal/50">
                  Taxes and shipping calculated at checkout. Enjoy complimentary returns within 30 days.
                </p>
                <Link href="/checkout" className="btn-primary w-full" onClick={onClose}>
                  Proceed to Checkout
                </Link>
                <Link href="/cart" className="btn-outline w-full" onClick={onClose}>
                  View Shopping Bag
                </Link>
              </div>
            </motion.div>
          </Dialog.Portal>
        </Dialog.Root>
      ) : null}
    </AnimatePresence>
  );
}
