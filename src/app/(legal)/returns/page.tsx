export const metadata = { title: 'Returns Policy' };

export default function ReturnsPolicyPage() {
  return (
    <div className="container-responsive space-y-6">
      <header>
        <h1 className="section-title">Returns & exchanges</h1>
        <p className="text-sm text-charcoal/70">
          Enjoy complimentary EU returns within 30 days of delivery.
        </p>
      </header>
      <div className="space-y-4 rounded-2xl bg-white p-8 shadow-soft text-sm text-charcoal/70">
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Eligibility</h2>
          <p>Items must be unworn, unwashed, with tags attached and in original packaging.</p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Process</h2>
          <p>
            Submit a request via your account or email concierge@fufina.com with your order number. We will
            issue an RMA and prepaid label.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-heading text-xl text-charcoal">Refunds</h2>
          <p>
            Refunds are processed to the original payment method within 5 business days of receiving your
            return.
          </p>
        </section>
      </div>
    </div>
  );
}
