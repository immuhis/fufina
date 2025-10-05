import Link from 'next/link';

export const metadata = { title: 'Account · Returns' };

export default function AccountReturnsPage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <header className="space-y-2">
        <h2 className="font-heading text-2xl text-charcoal">Returns portal</h2>
        <p className="text-sm text-charcoal/60">
          Submit a return or exchange request within 30 days of delivery. Complimentary EU return shipping.
        </p>
      </header>
      <div className="space-y-4 text-sm text-charcoal/70">
        <p>To initiate a return, please have your order number and email ready.</p>
        <Link href="/account/returns/request" className="btn-primary w-full sm:w-fit">
          Start a return
        </Link>
        <p>
          Need assistance? Contact our concierge at{' '}
          <a href="mailto:concierge@fufina.com" className="text-rose">
            concierge@fufina.com
          </a>
        </p>
      </div>
    </div>
  );
}
