import Link from 'next/link';
import type { ComponentProps } from 'react';

export const metadata = { title: 'Login' };

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h1 className="font-heading text-3xl text-charcoal">Welcome back</h1>
      <p className="text-sm text-charcoal/60">Sign in to access your account and wishlist.</p>
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <button type="submit" className="btn-primary w-full">
          Sign in
        </button>
      </form>
      <div className="flex flex-col gap-2 text-sm text-charcoal/70">
        <Link href="/auth/forgot" className="text-rose">
          Forgot your password?
        </Link>
        <p>
          New to Fufina?{' '}
          <Link href="/auth/register" className="text-rose">
            Create an account
          </Link>
        </p>
      </div>
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
