export const metadata = { title: 'Frequently Asked Questions' };

const faqs = [
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes. We ship worldwide with trusted partners. EU orders over €200 include complimentary express delivery.'
  },
  {
    question: 'Can I book a private styling session?',
    answer:
      'Absolutely. Our Lisbon atelier hosts private appointments. Virtual consultations are also available via video call.'
  },
  {
    question: 'What is your return policy?',
    answer:
      'Returns are accepted within 30 days. Items must be unworn with all labels attached. Use our returns portal to create a prepaid label.'
  }
];

export default function FaqPage() {
  return (
    <div className="container-responsive space-y-6">
      <header>
        <h1 className="section-title">Questions & answers</h1>
        <p className="text-sm text-charcoal/70">
          If you need further assistance, reach our concierge team at concierge@fufina.com.
        </p>
      </header>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl bg-white p-6 shadow-soft">
            <summary className="cursor-pointer font-heading text-lg text-charcoal">{faq.question}</summary>
            <p className="mt-3 text-sm text-charcoal/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
