import useCart from "@/hooks/useCart";
import ShoppingBagIcon from "../../assets/cart.png";

export default function CartIcon() {
  const {cartItems} = useCart();

  return (
    <div className="relative">
      <div className="rounded-full bg-[--pink-custom] p-2">
        <img src={ShoppingBagIcon} />
      </div>
      {cartItems.length === 0 && (
        <span className="absolute -top-2 -right-2 bg-[#35afa0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      )}
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#35afa0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </div>
  );
}
