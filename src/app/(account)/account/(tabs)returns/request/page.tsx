import type { ComponentProps } from 'react';

export const metadata = { title: 'Account · Request Return' };

export default function ReturnRequestPage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h2 className="font-heading text-2xl text-charcoal">Request a return</h2>
      <p className="text-sm text-charcoal/60">
        Complete the form below to generate a return merchandise authorisation (RMA). Our concierge team will
        review and email your prepaid label within 24 hours.
      </p>
      <form className="grid gap-4">
        <Input label="Order number" placeholder="e.g. 1001" />
        <Input label="Email address" type="email" />
        <Input label="Item to return" placeholder="Aurora Silk Midi Dress" />
        <label className="text-sm font-medium text-charcoal">
          Reason for return
          <textarea
            rows={4}
            className="mt-1 w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
          />
        </label>
      </form>
      <button type="button" className="btn-primary w-full sm:w-fit">
        Submit request
      </button>
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
