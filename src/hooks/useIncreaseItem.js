import { increaseItemQuantity } from "@/js/Cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useIncreaseItem() {
  const queryClient = useQueryClient();

  const { mutate: increaseItem, isPending: isIncreasing } = useMutation({
    mutationKey: ["increaseItemInCart"],
    mutationFn: (productId) => increaseItemQuantity(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsInCart"] });
    },
  });
  return { increaseItem, isIncreasing };
}
