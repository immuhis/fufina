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

export async function POST(request: Request) {
  const cartId = ensureCartId();
  const cart = getCart(cartId);
  const body = await request.json();
  const { variantId, quantity } = body;
  const items = [...cart.items];
  const index = items.findIndex((item) => item.variantId === variantId);
  if (index > -1) {
    items[index].quantity += quantity ?? 1;
  } else {
    items.push({ variantId, quantity: quantity ?? 1 });
  }
  const updated = updateCart(cartId, items);
  return NextResponse.json(updated);
}

export async function PUT(request: Request) {
  const cartId = ensureCartId();
  const cart = getCart(cartId);
  const body = await request.json();
  const { variantId, quantity } = body;
  const items = cart.items.map((item) =>
    item.variantId === variantId ? { ...item, quantity: Math.max(1, quantity ?? 1) } : item
  );
  const updated = updateCart(cartId, items);
  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const cartId = ensureCartId();
  const cart = getCart(cartId);
  const { searchParams } = new URL(request.url);
  const variantId = searchParams.get('variantId');
  const items = cart.items.filter((item) => item.variantId !== variantId);
  const updated = updateCart(cartId, items);
  return NextResponse.json(updated);
}
