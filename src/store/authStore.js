
// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("accessToken") || null, 
  setToken: (token) => {
    if (token) localStorage.setItem("accessToken", token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ token: null });
  },
}));


// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useAuthStore = create(
//   persist(
//     (set) => ({
//       token: null,
//       user: null,
//       setToken: (t) => set({ token: t }),
//       setUser: (u) => set({ user: u }),
//       logout: () => set({ token: null, user: null }),
//     }),
//     { name: "auth", partialize: (s) => ({ token: s.token, user: s.user }) }
//   )
// );