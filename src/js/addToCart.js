import { api } from "@/lib/api";
import { useUserToken } from "@/store/userStore.js";

async function addToCart(userId, productId, quantity) {
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
  console.log(data);
  return data;
}

export default addToCart;
