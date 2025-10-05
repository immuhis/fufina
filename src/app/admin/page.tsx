export const metadata = { title: 'Admin Dashboard' };

const kpis = [
  { name: 'Revenue', value: '€12,450', change: '+18% MoM' },
  { name: 'Orders', value: '128', change: '+9% MoM' },
  { name: 'Average Order Value', value: '€194', change: '+6% MoM' }
];

export default function AdminDashboardPage() {
  return (
    <div className="container-responsive space-y-8">
      <header className="space-y-2">
        <h1 className="section-title">Admin dashboard</h1>
        <p className="text-sm text-charcoal/60">Monitor store performance at a glance.</p>
      </header>
      <section className="grid gap-4 sm:grid-cols-3">
        {kpis.map((kpi) => (
          <article key={kpi.name} className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg text-charcoal">{kpi.name}</h2>
            <p className="mt-2 text-2xl font-semibold text-rose">{kpi.value}</p>
            <p className="text-xs text-charcoal/60">{kpi.change}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-lg text-charcoal">Recent orders</h2>
        <p className="mt-3 text-sm text-charcoal/70">Connect to the database to view live orders.</p>
      </section>
    </div>
  );
}
