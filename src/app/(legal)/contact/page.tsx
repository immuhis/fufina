import type { ComponentProps } from 'react';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="container-responsive grid gap-10 lg:grid-cols-2">
      <section className="space-y-6">
        <h1 className="section-title">Concierge support</h1>
        <p className="text-sm text-charcoal/70">
          Our stylists are available Monday to Saturday, 9:00–19:00 CET, to assist with sizing, gifting, and
          bespoke requests.
        </p>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg text-charcoal">Boutique</h2>
            <p className="mt-2 text-sm text-charcoal/70">
              Rua das Flores 21, Lisbon
              <br />
              +351 210 123 456
              <br />
              hello@fufina.com
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg text-charcoal">Virtual styling</h2>
            <p className="mt-2 text-sm text-charcoal/70">
              Book a video consultation with our stylists.
            </p>
            <button type="button" className="btn-primary mt-3">
              Schedule appointment
            </button>
          </div>
        </div>
      </section>
      <section className="space-y-4 rounded-2xl bg-white p-8 shadow-soft">
        <h2 className="font-heading text-xl text-charcoal">Send us a message</h2>
        <form className="space-y-4">
          <Input label="Name" />
          <Input label="Email" type="email" />
          <Input label="Phone" type="tel" />
          <label className="text-sm font-medium text-charcoal">
            Message
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

function Input({ label, ...props }: ComponentProps<'input'> & { label: string }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  return (
    <label className="text-sm font-medium text-charcoal">
      {label}
      <input
        id={id}
        {...props}
        className="mt-1 w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
      />
    </label>
  );
}
