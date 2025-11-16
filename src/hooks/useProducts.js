import { useFilterStore } from "@/store/filterStore.js";
import { useQuery } from "@tanstack/react-query";
import getAllProducts from "@/js/getAllProducts.js";
import getProductsByCategory from "@/js/getProductsByCategory";

export default function useProducts() {
  const { categoryId, minPrice, maxPrice } = useFilterStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () =>
      categoryId ? getProductsByCategory(categoryId) : getAllProducts(),
  });
  const products = data?.products?.filter((product) => {
    return product.Price >= minPrice && product.Price <= maxPrice;
  });
  return { products, isLoading, error };
}
