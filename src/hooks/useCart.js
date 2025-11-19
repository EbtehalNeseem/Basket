import { getCart } from "@/js/Cart";
import { useQuery } from "@tanstack/react-query";

export default function useCart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ProductsInCart"],
    queryFn: getCart,
  });
  const cartItems = data?.cart?.items || [];
  const totalPrice = data?.cart?.totalPrice || 0;
  return { cartItems, totalPrice, isLoading, error };
}
