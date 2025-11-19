import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useUserToken } from "@/store/userStore";
import { toast } from "react-hot-toast";

export default function useCreateOrder() {
  const accessToken = useUserToken.getState().accessToken;

  return useMutation({
    mutationFn: (orderData) =>
      api.post("/order/createOrder", orderData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),

    onSuccess: () => toast.success("Order placed successfully!"),
    onError: () => toast.error("Order failed!"),
  });
}
