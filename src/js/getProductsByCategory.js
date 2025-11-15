import { api } from "@/lib/api";

export default async function getProductsByCategory(categoryId) {
  const { data } = await api.get(`/product/category/${categoryId}`);
  return data;
}
