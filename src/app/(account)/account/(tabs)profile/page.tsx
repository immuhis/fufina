import type { ComponentProps } from 'react';

export const metadata = { title: 'Account · Profile' };

export default function AccountProfilePage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <header>
        <h2 className="font-heading text-2xl text-charcoal">Profile</h2>
        <p className="text-sm text-charcoal/60">Update your personal information.</p>
      </header>
      <form className="grid gap-4 sm:grid-cols-2">
        <Input label="First name" defaultValue="Elena" />
        <Input label="Last name" defaultValue="Fidalgo" />
        <Input label="Email" type="email" defaultValue="elena@fufina.com" />
        <Input label="Phone" type="tel" placeholder="+351" />
        <Input label="Date of birth" type="date" className="sm:col-span-2" />
      </form>
      <button type="button" className="btn-primary w-full sm:w-fit">
        Save changes
      </button>
    </div>
  );
}

function Input({ label, className, ...props }: ComponentProps<'input'> & { label: string }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  return (
    <label className={`text-sm font-medium text-charcoal ${className ?? ''}`}>
      {label}
      <input
        id={id}
        {...props}
        className="mt-1 w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
      />
    </label>
  );
}
