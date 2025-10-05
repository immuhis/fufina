import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-responsive flex flex-col items-center justify-center py-24 text-center">
      <h1 className="font-heading text-4xl text-charcoal">We couldn&apos;t find that page.</h1>
      <p className="mt-4 max-w-xl text-sm text-charcoal/70">
        The piece you&apos;re looking for may be in our upcoming collection. Explore our catalog or return to
        the homepage.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/catalog" className="btn-outline">
          Browse catalog
        </Link>
      </div>
    </div>
  );
}
