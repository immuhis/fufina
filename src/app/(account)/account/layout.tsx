import Link from 'next/link';
import { ReactNode } from 'react';

const tabs = [
  { name: 'Profile', href: '/account/profile' },
  { name: 'Addresses', href: '/account/addresses' },
  { name: 'Orders', href: '/account/orders' },
  { name: 'Returns', href: '/account/returns' },
  { name: 'Wishlist', href: '/account/wishlist' },
  { name: 'Privacy', href: '/account/privacy' },
  { name: 'Data & GDPR', href: '/account/gdpr' }
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container-responsive grid gap-10 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-6 rounded-2xl bg-white p-6 shadow-soft">
        <div>
          <h1 className="section-title text-2xl">My Account</h1>
          <p className="mt-2 text-sm text-charcoal/60">Manage your personal details and orders.</p>
        </div>
        <nav className="space-y-2" aria-label="Account tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className="block rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-charcoal/80 transition hover:border-rose hover:bg-rose/10"
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
