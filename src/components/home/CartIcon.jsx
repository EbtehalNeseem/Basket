import { useCartStore } from "../../store/cartstore";
import ShoppingBagIcon from "../../assets/cart.png";

export default function CartIcon() {
  const count = useCartStore((state) => state.count);

  return (
    <div className="relative">
      <div className="rounded-full bg-[--pink-custom] p-2">
        <img src={ShoppingBagIcon} />
      </div>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#35afa0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}
