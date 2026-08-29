'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addToCart: (product) => {
        const currentCart = get().cart;
        const existingIndex = currentCart.findIndex((item) => item.id === product.id);

        if (existingIndex > -1) {
          const updatedCart = [...currentCart];
          updatedCart[existingIndex].quantity += 1;
          set({ cart: updatedCart, isOpen: true });
        } else {
          set({ cart: [...currentCart, { ...product, quantity: 1 }], isOpen: true });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotal: () => {
        return get().cart.reduce((total, item) => {
          const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, '')) || 0;
          return total + priceNum * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'jepskenya-cart-storage',
    }
  )
);
