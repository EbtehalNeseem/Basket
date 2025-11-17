import { addToCart } from "@/js/Cart";
import { useUserToken } from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";

export default function useAddItemToCart(productId, quantity) {
  const userId = useUserToken.getState().userId;
  const { mutate, isPending } = useMutation({
    mutationKey: ["addItemToCart"],
    mutationFn: addToCart(userId, productId, quantity),
  });
  return { mutate, isPending };
}
