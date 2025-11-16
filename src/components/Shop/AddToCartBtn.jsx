import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import addToCart from "@/js/addToCart";
import { useUserToken } from "@/store/userStore.js";

function AddToCartBtn({ id, quantity }) {
  const userId = useUserToken((state) => state.userId);

  return (
    <Button
      className="bg-[--primary] hover:bg-[--hover-color]"
      onClick={() => {
        addToCart(userId, id, quantity);
      }}
    >
      <ShoppingBag />
      Add to Cart
    </Button>
  );
}

export default AddToCartBtn;
