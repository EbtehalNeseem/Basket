import { addToWishlist } from "@/js/Wishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useUserToken } from "@/store/userStore";

export default function useAddItemToWishlist() {
  const queryClient = useQueryClient();
  const userId = useUserToken.getState().userId;

  const { mutate, isPending } = useMutation({
    mutationFn: (productId) => addToWishlist(userId, productId),

    onSuccess: () => {
      toast.success("Added to wishlist ❤️");
      queryClient.invalidateQueries(["ProductsInWishlist"]);
    },

    onError: () => {
      toast.error("Failed to add to wishlist");
    },
  });

  return { mutate, isPending };
}
