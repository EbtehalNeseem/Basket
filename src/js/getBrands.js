import { api } from "@/lib/api";

export default async function getBrands() {
  const { data } = await api.get("/brand/get-all-brand");
  return data;
}
