export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <div className="container-responsive space-y-6">
      <header>
        <h1 className="section-title">Terms of service</h1>
        <p className="text-sm text-charcoal/70">
          These terms govern the use of Fufina Boutique and our services.
        </p>
      </header>
      <div className="space-y-4 rounded-2xl bg-white p-8 shadow-soft text-sm text-charcoal/70">
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Orders</h2>
          <p>
            All orders are subject to availability. We reserve the right to cancel orders with full refund if an
            item is unavailable.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Pricing</h2>
          <p>
            Prices are listed in EUR and include VAT where applicable. We may update pricing without prior
            notice.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Liability</h2>
          <p>
            Fufina Boutique is not liable for delays due to customs or courier services. Your statutory rights
            remain unaffected.
          </p>
        </section>
      </div>
    </div>
  );
}
