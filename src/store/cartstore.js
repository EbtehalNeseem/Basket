import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/lib/api";
import { useUserToken } from "@/store/userStore";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      totalPrice: 0,
      count: 0,
      loading: false,
      error: null,

      // ─────────── Fetch Cart ───────────
      fetchCart: async () => {
        console.log("fetchCart CALLED !");
        try {
          set({ loading: true });
          const res = await api.get("/cart/getcart");

          set({
            cartItems: res.data.cart.items || [],
            totalPrice: res.data.cart.totalPrice || 0,
            count: res.data.cart.count || 0,
            loading: false,
            error: null,
          });
        } catch (err) {
          console.log("CART RESPONSE:", res.data);
          set({
            loading: false,
            error: "Failed to load cart",
          });
        }
      },

      // ─────────── Add to Cart ───────────
      addToCart: async (productId, quantity = 1) => {
        try {
          set({ loading: true });

          await api.post("/cart/add-cart", {
            productId,
            quantity,
          });

          // refresh cart
          await get().fetchCart();
        } catch (err) {
          set({ loading: false, error: "Failed to add item" });
        }
      },

      // ─────────── Remove From Cart ───────────
      removeFromCart: async (productId) => {
        try {
          set({ loading: true });

          await api.delete("/cart/remove-cart", {
            data: { productId },
          });

          await get().fetchCart();
        } catch (err) {
          set({ loading: false, error: "Failed to remove item" });
        }
      },

      // ─────────── Clear Entire Cart ───────────
      clearCart: async () => {
        try {
          set({ loading: true });

          await api.delete("/cart/clear-cart");

          set({
            cartItems: [],
            totalPrice: 0,
            count: 0,
            loading: false,
            error: null,
          });
        } catch (err) {
          set({ loading: false, error: "Failed to clear cart" });
        }
      },
    }),
    {
      name: "cart-store", // اسم التخزين في localStorage
      getStorage: () => localStorage,
    }
  )
);
