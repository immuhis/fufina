import Link from 'next/link';
import type { ComponentProps } from 'react';

export const metadata = { title: 'Forgot Password' };

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-soft">
      <h1 className="font-heading text-3xl text-charcoal">Reset your password</h1>
      <p className="text-sm text-charcoal/60">
        Enter your email to receive a secure link to reset your password.
      </p>
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="you@example.com" />
        <button type="submit" className="btn-primary w-full">
          Send reset link
        </button>
      </form>
      <Link href="/auth/login" className="text-sm text-rose">
        Back to sign in
      </Link>
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
