import { NextResponse } from 'next/server';

const coupons = new Map([
  ['FUFWELCOME', { type: 'percent', value: 10 }],
  ['FUFVIP', { type: 'fixed', value: 3000 }]
]);

export async function POST(request: Request) {
  const body = await request.json();
  const code = String(body.code ?? '').toUpperCase();
  const coupon = coupons.get(code);
  if (!coupon) {
    return NextResponse.json({ valid: false, message: 'Coupon not found' }, { status: 404 });
  }
  return NextResponse.json({ valid: true, coupon });
}
