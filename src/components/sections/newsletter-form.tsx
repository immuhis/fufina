'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  return (
    <form
      className="mt-4 space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus('success');
        setEmail('');
      }}
      aria-label="Newsletter sign up"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/40"
      />
      <button type="submit" className="btn-primary w-full">
        Subscribe
      </button>
      {status === 'success' ? (
        <motion.p
          className="text-sm text-rose"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you for joining the Fufina circle.
        </motion.p>
      ) : null}
    </form>
  );
}
