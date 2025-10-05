import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');
  console.log('Stripe webhook received', { signature, payloadLength: payload.length });
  return NextResponse.json({ received: true });
}
