import Link from 'next/link';

export const metadata = { title: 'Account · Orders' };

const orders = [
  {
    id: '1001',
    date: '12 Mar 2024',
    total: '€420.00',
    status: 'Fulfilled',
    items: 3
  },
  {
    id: '1000',
    date: '02 Feb 2024',
    total: '€185.00',
    status: 'Pending',
    items: 1
  }
];

export default function AccountOrdersPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="font-heading text-2xl text-charcoal">Order history</h2>
        <p className="text-sm text-charcoal/60">Track orders, download invoices, and request returns.</p>
      </header>
      <div className="space-y-4">
        {orders.map((order) => (
          <article key={order.id} className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-charcoal/60">Order #{order.id}</p>
                <p className="text-sm text-charcoal/80">{order.date}</p>
              </div>
              <div className="text-sm text-charcoal/80">
                <p>{order.items} items</p>
                <p className="font-semibold text-charcoal">{order.total}</p>
              </div>
              <span className="rounded-full bg-rose/10 px-3 py-1 text-xs font-semibold text-rose">{order.status}</span>
              <Link href={`/account/orders/${order.id}`} className="btn-outline text-xs">
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
