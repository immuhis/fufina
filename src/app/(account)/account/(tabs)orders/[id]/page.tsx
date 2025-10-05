import { notFound } from 'next/navigation';
import Link from 'next/link';

const orders = {
  '1001': {
    id: '1001',
    tracking: 'EU123456789PT',
    timeline: [
      { title: 'Order placed', date: '12 Mar 2024 · 09:24' },
      { title: 'Payment captured', date: '12 Mar 2024 · 09:25' },
      { title: 'Packed at atelier', date: '13 Mar 2024 · 15:00' },
      { title: 'Shipped via DHL Express', date: '13 Mar 2024 · 19:30' }
    ]
  }
};

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders[params.id];
  if (!order) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/account/orders" className="btn-outline text-xs">
        Back to orders
      </Link>
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl text-charcoal">Order #{order.id}</h2>
        <p className="mt-2 text-sm text-charcoal/70">Tracking number: {order.tracking}</p>
        <div className="mt-6 space-y-4">
          {order.timeline.map((item) => (
            <div key={item.title} className="rounded-xl border border-rose/20 bg-background/60 p-4">
              <h3 className="font-medium text-charcoal">{item.title}</h3>
              <p className="text-sm text-charcoal/60">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
