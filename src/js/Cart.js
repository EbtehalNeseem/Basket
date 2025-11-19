import { api } from "@/lib/api";
import { useUserToken } from "@/store/userStore.js";

export async function getCart() {
  const accessToken = useUserToken.getState().accessToken;
  const { data } = await api.get("/cart/get-cart", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}
export async function addToCart({ userId, productId, quantity }) {
  const accessToken = useUserToken.getState().accessToken;

  const { data } = await api.post(
    "/cart/add-cart",
    {
      userId,
      productId,
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
}
export async function removeFromCart(productId) {
  const accessToken = useUserToken.getState().accessToken;

  const { data } = await api.delete(`/cart/remove/${productId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}
export async function clearCart() {
  const accessToken = useUserToken.getState().accessToken;
  const { data } = await api.delete("/cart/clear-Cart", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}
export async function increaseItemQuantity(productId) {
  const accessToken = useUserToken.getState().accessToken;
  const { data } = await api.patch(
    `/cart/update-quantity/${productId}?action=increase`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
}
export async function decreaseItemQuantity(productId) {
  const accessToken = useUserToken.getState().accessToken;
  const { data } = await api.patch(
    `/cart/update-quantity/${productId}?action=decrease`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
}
