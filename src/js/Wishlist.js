import { api } from "@/lib/api";
import { useUserToken } from "../store/userStore";

export async function getWishlist() {
  const accessToken = useUserToken.getState().accessToken;

  const { data } = await api.get("/wishlist/getFavorites", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export async function addToWishlist(userId, productId) {
  const accessToken = useUserToken.getState().accessToken;

  const { data } = await api.post(
    "/wishlist/add product to favorites",
    {
      userId,
      productId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}

export async function removeFromWishlist(productId) {
  const accessToken = useUserToken.getState().accessToken;

  const { data } = await api.delete(
    `/wishlist/DeleteFavorites/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}
