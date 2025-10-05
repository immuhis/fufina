import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getCart, updateCart } from '@/lib/server/cart-store';

const CART_COOKIE = 'fufina_cart_id';

function ensureCartId() {
  const store = cookies();
  let cartId = store.get(CART_COOKIE)?.value;
  if (!cartId) {
    cartId = crypto.randomUUID();
    store.set(CART_COOKIE, cartId, { httpOnly: true, sameSite: 'lax', secure: true, path: '/' });
  }
  return cartId;
}

export async function GET() {
  const cartId = ensureCartId();
  const cart = getCart(cartId);
  return NextResponse.json(cart);
}

export async function PUT(request: Request) {
  const cartId = ensureCartId();
  const body = await request.json();
  const items = Array.isArray(body.items) ? body.items : [];
  const cart = updateCart(cartId, items);
  return NextResponse.json(cart);
}
