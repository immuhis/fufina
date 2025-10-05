'use client';

import { useSyncExternalStore } from 'react';

export type CartItem = {
  id: string;
  variantId: string;
  name: string;
  image: string;
  variant: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const cartStore: { state: CartState; listeners: Set<() => void> } = {
  state: {
    items: []
  },
  listeners: new Set()
};

function setState(partial: Partial<CartState>) {
  cartStore.state = { ...cartStore.state, ...partial };
  cartStore.listeners.forEach((listener) => listener());
}

export function addToCart(item: CartItem) {
  const existing = cartStore.state.items.find((i) => i.variantId === item.variantId);
  if (existing) {
    existing.quantity += item.quantity;
    setState({ items: [...cartStore.state.items] });
  } else {
    setState({ items: [...cartStore.state.items, item] });
  }
}

export function removeFromCart(variantId: string) {
  setState({ items: cartStore.state.items.filter((item) => item.variantId !== variantId) });
}

export function clearCart() {
  setState({ items: [] });
}

export function useCartStore() {
  const state = useSyncExternalStore(
    (listener) => {
      cartStore.listeners.add(listener);
      return () => cartStore.listeners.delete(listener);
    },
    () => cartStore.state,
    () => cartStore.state
  );

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return { ...state, subtotal };
}
