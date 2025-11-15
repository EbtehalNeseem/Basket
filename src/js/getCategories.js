import { api } from "@/lib/api";

export default async function getCategories() {
  const { data } = await api.get("/category/get-category");
  return data;
}
