import { addToCart } from "@/js/Cart";
import { useUserToken } from "@/store/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddItemToCart() {
  const queryClient = useQueryClient();
  const userId = useUserToken.getState().userId;

  const { mutate, isPending } = useMutation({
    mutationKey: ["addItemToCart"],
    mutationFn: ({ productId, quantity }) =>
      addToCart({ userId, productId, quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsInCart"] });
    },
  });
  return { mutate, isPending };
}
