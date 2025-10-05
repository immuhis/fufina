import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecret
  ? new Stripe(stripeSecret, {
      apiVersion: '2023-10-16'
    })
  : null;

export async function POST(request: Request) {
  const body = await request.json();
  const amount = Number(body.amount ?? 0);
  if (!stripe) {
    return NextResponse.json(
      {
        clientSecret: 'test_client_secret',
        message: 'Stripe secret key missing. Using mock client secret for local development.'
      },
      { status: 200 }
    );
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    automatic_payment_methods: { enabled: true }
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
