import { api } from "@/lib/api";
export default async function getAllProducts() {
  const { data } = await api.get("/product/get-all-product");
  return data;
}
