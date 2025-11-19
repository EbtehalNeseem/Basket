import { Loader2Icon, LucideLoader, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAddItemToCart from "@/hooks/useAddItemToCart";

function AddToCartBtn({ id, quantity = 1, setQuantity }) {
  const { mutate, isPending } = useAddItemToCart();
  const handleAdditionToCart = () => {
    mutate(
      { productId: id, quantity: quantity },
      {
        onSuccess: () => setQuantity(1),
      }
    );
    setQuantity(1);
  };
  return (
    <Button
      className="bg-[--primary] hover:bg-[--hover-color]"
      onClick={handleAdditionToCart}
      disabled={isPending}
    >
      {isPending ? (
        <>
          Adding
          <LucideLoader />
        </>
      ) : (
        <>
          <ShoppingBag />
          Add to Cart
        </>
      )}
    </Button>
  );
}

export default AddToCartBtn;
