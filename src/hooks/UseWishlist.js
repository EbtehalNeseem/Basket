import { getWishlist } from "@/js/Wishlist";
import { useQuery } from "@tanstack/react-query";

export default function useWishlist() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ProductsInWishlist"],
    queryFn: getWishlist,
  });

  const wishlistItems = data?.wishlist?.items || [];

  return { wishlistItems, isLoading, error };
}
