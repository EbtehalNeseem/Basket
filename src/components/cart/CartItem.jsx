import useDeleteFromCart from "@/hooks/useDeleteFromCart";
import useIncreaseItem from "@/hooks/useIncreaseItem";
import useDecreaseItem from "@/hooks/useDecreaseItem";
import { Trash2Icon } from "lucide-react";

export default function CartItem({ item }) {
  const { increaseItem, isIncreasing } = useIncreaseItem();
  const { decreaseItem, isDecreasing } = useDecreaseItem();
  const { deleteFromCart, isDeleting } = useDeleteFromCart();
  return (
    <div
      className={`flex justify-between items-center border-b pb-2 ${
        isDeleting && "opacity-50"
      }`}
    >
      <div className="border border-[--border-primary] rounded w-16 h-16 flex items-center justify-center overflow-hidden">
        <img
          src={item.Image?.url}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 flex flex-col items-start px-2">
        <span className="font-medium">{item.name || "No name"}</span>
        <span className="text-sm text-gray-500">
          ${parseFloat((item.price * item.quantity).toFixed(2))}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className={`p-2 ${isDecreasing && "opacity-50 cursor-not-allowed"}`}
          onClick={() => decreaseItem(item.id)}
        >
          {item.quantity === 1 ? (
            <i class="fa-solid fa-trash text-primary"></i>
          ) : (
            <i className="fa-solid fa-circle-minus text-primary"></i>
          )}
        </button>

        <span>{item.quantity}</span>

        <button
          className={`p-2 ${isIncreasing && "opacity-50 cursor-not-allowed"}`}
          onClick={() => increaseItem(item.id)}
          disabled={isIncreasing}
        >
          <i className="fa-solid fa-circle-plus text-primary"></i>
        </button>

        <button
          className="p-1"
          disabled={isDeleting}
          onClick={() => {
            deleteFromCart(item.id);
          }}
        >
          <i className="fa-solid fa-trash text-red-600 hover:text-red-800"></i>
        </button>
      </div>
    </div>
  );
}
