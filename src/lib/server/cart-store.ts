const carts = new Map<string, { id: string; items: { variantId: string; quantity: number }[] }>();

function getCartRecord(sessionId: string) {
  if (!carts.has(sessionId)) {
    carts.set(sessionId, { id: sessionId, items: [] });
  }
  return carts.get(sessionId)!;
}

export function getCart(sessionId: string) {
  return getCartRecord(sessionId);
}

export function updateCart(sessionId: string, items: { variantId: string; quantity: number }[]) {
  const cart = getCartRecord(sessionId);
  cart.items = items;
  carts.set(sessionId, cart);
  return cart;
}
