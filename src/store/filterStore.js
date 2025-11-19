import { create } from "zustand";

export const useFilterStore = create((set) => ({
  categoryId: null,
  currentPage: 1,
  productsPerPage: 12,
  minPrice: 0,
  maxPrice: 65,

  setCategory: (category) => set({ categoryId: category, currentPage: 1 }),
  setPage: (page) => set({ currentPage: page }),
  setPriceRange: (min, max) => set({ minPrice: min, maxPrice: max }),
}));
