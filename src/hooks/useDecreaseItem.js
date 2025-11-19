import { decreaseItemQuantity } from "@/js/Cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDecreaseItem() {
  const queryClient = useQueryClient();

  const { mutate: decreaseItem, isPending: isDecreasing } = useMutation({
    mutationKey: ["decreaseItemInCart"],
    mutationFn: (productId) => decreaseItemQuantity(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsInCart"] });
    },
  });
  return { decreaseItem, isDecreasing };
}
