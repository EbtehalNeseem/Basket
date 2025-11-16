import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserToken = create(
  persist(
    (set) => ({
      accessToken: localStorage.getItem("accessToken") || "",
      refreshToken: localStorage.getItem("refreshToken") || "",
      phone: localStorage.getItem("phone") || "",
      password: localStorage.getItem("password") || "",
      userId: null,

      setTokens: (access, refresh) => {
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        set({ accessToken: access, refreshToken: refresh });
      },

      setUserId: (id) => set({ userId: id }),

      setCredentials: (phone, password) => {
        localStorage.setItem("phone", phone);
        localStorage.setItem("password", password);
        set({ phone, password });
      },

      clearTokens: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ accessToken: "", refreshToken: "" });
      },

      clearCredentials: () => {
        localStorage.removeItem("phone");
        localStorage.removeItem("password");
        set({ phone: "", password: "" });
      }
    }),
    {
      name: "user-store", // الاسم في localStorage
      getStorage: () => localStorage, // تحديد نوع التخزين
    }
  )
);
