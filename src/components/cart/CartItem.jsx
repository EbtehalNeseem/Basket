import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "@/js/Cart";

export default function CartItem({ item }) {
  return (
    <div
      className="flex justify-between items-center border-b pb-2"
      key={item.id}
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
        <span className="text-sm text-gray-500">${item.price}</span>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-1" onClick={() => decreaseItemQuantity(item.id)}>
          <i className="fa-solid fa-circle-minus text-primary"></i>
        </button>

        <span>{item.quantity}</span>

        <button className="p-1" onClick={() => increaseItemQuantity(item.id)}>
          <i className="fa-solid fa-circle-plus text-primary"></i>
        </button>

        <button
          className="p-1"
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          <i className="fa-solid fa-trash text-red-600 hover:text-red-800"></i>
        </button>
      </div>
    </div>
  );
}
