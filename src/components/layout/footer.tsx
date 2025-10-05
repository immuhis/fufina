import Link from 'next/link';
import { NewsletterForm } from '@/components/sections/newsletter-form';

const footerLinks = {
  boutique: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ],
  customerCare: [
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Returns', href: '/returns' },
    { name: 'Privacy', href: '/privacy' }
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'GDPR', href: '/account/gdpr' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-responsive grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-charcoal">Fufina Boutique</h3>
          <p className="mt-4 text-sm text-charcoal/70">
            Curated European-inspired looks for women, kids, and babies. Crafted with love, designed for
            lasting memories.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal">Boutique</h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            {footerLinks.boutique.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-rose">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal">Customer Care</h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            {footerLinks.customerCare.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-rose">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal">Stay in touch</h4>
          <p className="mt-4 text-sm text-charcoal/70">
            Be the first to discover new collections, special offers, and styling inspiration.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-rose/20 py-6">
        <div className="container-responsive flex flex-col items-center justify-between gap-4 text-xs text-charcoal/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Fufina Boutique. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-rose">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
