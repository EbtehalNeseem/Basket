import { removeFromCart } from "@/js/Cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteFromCart() {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteFromCart, isPending: isDeleting } = useMutation({
    mutationFn: (productId) => removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsInCart"] });
    },
  });
  return { deleteFromCart, isDeleting };
}
