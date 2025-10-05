# Fufina Boutique

Luxury e-commerce storefront for women, kids, and babies fashion built with Next.js 14, TypeScript, Tailwind CSS, Prisma, and Stripe.

## Features

- Elegant responsive UI with Tailwind CSS, custom palette, and micro animations
- Demo catalog with collections, filtering, search, wishlist, and product detail pages
- Mini cart drawer, cart page, and guided checkout flow with Stripe Payment Intent integration
- Account area with profile, addresses, orders, returns portal, wishlist, privacy, and GDPR tools
- Auth scaffolding using NextAuth (email + password)
- Prisma schema for PostgreSQL with products, variants, orders, coupons, and more
- API route handlers for products, cart, checkout, orders, reviews, coupons, and Stripe webhooks
- Admin dashboard starter with KPI cards
- PWA manifest, sitemap, robots, analytics placeholders, and accessibility friendly components

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn
- PostgreSQL database (Neon, Supabase, etc.)
- Stripe account for real payments (test mode supported)

### Installation

```bash
pnpm install
```

### Environment

Copy `.env.example` to `.env.local` and update values:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: random string (generate via `openssl rand -hex 32`)
- `STRIPE_SECRET_KEY`: Stripe API key (test mode ok)
- `STRIPE_WEBHOOK_SECRET`: optional for webhook verification
- `RESEND_API_KEY`: optional for transactional emails

### Database

Run Prisma migrations or push schema:

```bash
pnpm prisma db push
pnpm prisma generate
pnpm prisma db seed
```

### Development

```bash
pnpm dev
```

Visit `http://localhost:3000`.

### Testing

- `pnpm test` – unit tests (Jest)
- `pnpm test:e2e` – Playwright end-to-end tests

### Building

```bash
pnpm build
pnpm start
```

## Demo Data

The seed script loads curated demo products for women, kids, and baby collections with remote placeholder imagery sourced from Unsplash. When you're ready to showcase real assets, upload them into `public/images` (e.g. `public/images/products`) and update the relevant imports to point back to local files.

## Branding Assets

- Replace the temporary header logo (currently an Unsplash image) by uploading `public/logo.png` and updating `src/components/layout/main-header.tsx` if you prefer a local asset.
- Provide Open Graph and manifest imagery by adding appropriately sized PNGs/JPEGs to `public/` and adjusting the metadata configuration in `src/app/layout.tsx` and `public/manifest.json`.

## Admin Access

Create an admin user manually via Prisma or SQL by setting `role` to `ADMIN`. Future enhancements can include admin authentication guards.

## Deployment

- Deploy frontend to Vercel
- Use managed Postgres (Neon, Supabase)
- Configure environment variables in hosting platform
- Set up Stripe webhook to point to `/api/webhooks/stripe`

## License

This project is provided as a starting point for Fufina Boutique and can be customised for production use.
