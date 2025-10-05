import type { Metadata } from 'next';
import { Lora, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/layout/providers';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { MainHeader } from '@/components/layout/main-header';
import { Footer } from '@/components/layout/footer';
import { AnalyticsScripts } from '@/components/layout/analytics';
import { CookieBanner } from '@/components/layout/cookie-banner';

const heading = Lora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

const body = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fufina.example.com'),
  title: {
    default: 'Fufina Boutique',
    template: '%s | Fufina Boutique'
  },
  description:
    'Fufina Boutique offers luxury apparel for women, kids, and babies with timeless European-inspired designs.',
  keywords: [
    'Fufina Boutique',
    'women apparel',
    'kids clothing',
    'baby boutique',
    'luxury fashion'
  ],
  openGraph: {
    type: 'website',
    title: 'Fufina Boutique',
    url: 'https://fufina.example.com',
    description:
      'Discover luxury apparel for women, kids, and babies with curated collections and bespoke service.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Fufina Boutique'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fufina Boutique',
    description:
      'Discover luxury apparel for women, kids, and babies with curated collections and bespoke service.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={cn('min-h-screen font-body text-charcoal antialiased', heading.variable, body.variable)}>
        <Providers>
          <AnalyticsScripts />
          <AnnouncementBar />
          <MainHeader />
          <main className="flex min-h-[60vh] flex-col bg-background px-4 pb-16 pt-6 sm:px-6 lg:px-10">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
