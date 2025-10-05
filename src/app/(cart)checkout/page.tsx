'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/lib/hooks/use-cart-store';
import { formatCurrency } from '@/lib/utils';

const steps = ['Shipping', 'Delivery', 'Payment', 'Review'];

export default function CheckoutPage() {
  const { items, subtotal } = useCartStore();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container-responsive space-y-10">
      <header className="space-y-3">
        <h1 className="section-title">Checkout</h1>
        <p className="text-sm text-charcoal/70">
          Secure checkout powered by Stripe. All payments are encrypted and PCI compliant.
        </p>
      </header>
      <div className="flex flex-wrap gap-3">
        {steps.map((step, index) => (
          <button
            key={step}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              index === activeStep ? 'bg-rose text-white' : 'bg-white text-charcoal/60 shadow-sm'
            }`}
            onClick={() => setActiveStep(index)}
          >
            {index + 1}. {step}
          </button>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white p-8 shadow-soft"
          >
            {activeStep === 0 ? <ShippingForm /> : null}
            {activeStep === 1 ? <DeliveryOptions /> : null}
            {activeStep === 2 ? <PaymentForm /> : null}
            {activeStep === 3 ? <ReviewSummary /> : null}
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                className="btn-outline"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
              >
                Back
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setActiveStep((step) => Math.min(steps.length - 1, step + 1))}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Continue'}
              </button>
            </div>
          </motion.div>
        </section>
        <aside className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-heading text-xl text-charcoal">Order summary</h2>
          <div className="space-y-3 text-sm text-charcoal/70">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-semibold text-charcoal">{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 border-t border-rose/10 pt-4 text-sm text-charcoal/70">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-charcoal">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>VAT (included)</span>
              <span>{formatCurrency(Math.round(subtotal * 0.2))}</span>
            </div>
          </div>
          <p className="text-xs text-charcoal/60">
            By placing your order you agree to our <Link href="/terms">Terms</Link> and{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </aside>
      </div>
    </div>
  );
}

function ShippingForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Email" type="email" />
        <Input label="Phone" type="tel" />
      </div>
      <Input label="Address line 1" />
      <Input label="Address line 2" />
      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="City" />
        <Input label="Postal code" />
        <Input label="Country" />
      </div>
    </form>
  );
}

function DeliveryOptions() {
  const options = [
    { label: 'Express (1-2 days)', description: '€20 · Tracked courier', price: 2000 },
    { label: 'Standard (3-5 days)', description: '€0 · Complimentary', price: 0 }
  ];
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option.label} className="flex flex-col gap-1 rounded-xl border border-rose/20 bg-background/60 p-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-charcoal">{option.label}</span>
            <span className="text-charcoal/70">{formatCurrency(option.price)}</span>
          </div>
          <span className="text-sm text-charcoal/60">{option.description}</span>
        </label>
      ))}
    </div>
  );
}

function PaymentForm() {
  return (
    <form className="space-y-4">
      <Input label="Cardholder name" />
      <Input label="Card number" placeholder="4242 4242 4242 4242" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Expiry" placeholder="MM/YY" />
        <Input label="CVC" />
      </div>
    </form>
  );
}

function ReviewSummary() {
  return (
    <div className="space-y-4 text-sm text-charcoal/70">
      <p>Review your order details. A confirmation will be sent to your email upon completion.</p>
      <label className="inline-flex items-center gap-2">
        <input type="checkbox" defaultChecked className="rounded border-rose/30 text-rose" />
        <span>I agree to receive updates about my order by email.</span>
      </label>
    </div>
  );
}

function Input({ label, type = 'text', placeholder }: { label: string; type?: string; placeholder?: string }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  return (
    <label className="text-sm font-medium text-charcoal">
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-rose/30 bg-background px-4 py-3 text-sm text-charcoal focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
      />
    </label>
  );
}
