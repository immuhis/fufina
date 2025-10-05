import Link from 'next/link';
import type { ComponentProps } from 'react';

export const metadata = { title: 'Create Account' };

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h1 className="font-heading text-3xl text-charcoal">Join the Fufina circle</h1>
      <p className="text-sm text-charcoal/60">
        Access curated wishlists, track orders, and receive exclusive collection previews.
      </p>
      <form className="space-y-4">
        <Input label="Name" placeholder="Your full name" />
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <label className="flex items-start gap-3 text-xs text-charcoal/70">
          <input type="checkbox" className="mt-1 rounded border-rose/30 text-rose" />
          <span>
            I would like to receive personalised newsletters and styling inspiration.
          </span>
        </label>
        <button type="submit" className="btn-primary w-full">
          Create account
        </button>
      </form>
      <p className="text-sm text-charcoal/70">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-rose">
          Sign in
        </Link>
      </p>
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
