'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartDrawer } from '@/lib/hooks/use-cart-drawer';
import { CartDrawer } from '@/components/sections/cart/cart-drawer';

const placeholderLogo =
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=160&h=160&q=80';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catalog', href: '/catalog' },
  { name: 'Women', href: '/collections/women' },
  { name: 'Kids', href: '/collections/kids' },
  { name: 'Baby', href: '/collections/baby' },
  { name: 'About', href: '/about' }
];

export function MainHeader() {
  const pathname = usePathname();
  const { isOpen, open, close } = useCartDrawer();

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <motion.div
        className="container-responsive flex items-center justify-between py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Fufina Boutique home">
            <Image src={placeholderLogo} alt="Fufina Boutique" width={48} height={48} className="rounded-full" />
            <span className="font-heading text-2xl font-semibold text-charcoal">Fufina Boutique</span>
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-rose',
                pathname === item.href ? 'text-rose' : 'text-charcoal/80'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="rounded-full border border-transparent p-2 transition hover:border-rose hover:bg-white"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/account"
            className="rounded-full border border-transparent p-2 transition hover:border-rose hover:bg-white"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/account/wishlist"
            className="rounded-full border border-transparent p-2 transition hover:border-rose hover:bg-white"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className="relative rounded-full border border-transparent p-2 transition hover:border-rose hover:bg-white"
            onClick={open}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="mini-cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Open cart</span>
          </button>
        </div>
      </motion.div>
      <CartDrawer open={isOpen} onClose={close} />
    </header>
  );
}
