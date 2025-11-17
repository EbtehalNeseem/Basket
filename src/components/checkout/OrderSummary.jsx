import React from "react";
import { useCartStore } from "../../store/cartstore";

export default function OrderSummary() {
  const { cartItems, totalPrice } = useCartStore();
   const count = useCartStore((item) => item.count);
  return (
    <>
 <div className="p-4 overflow-y-auto space-y-4">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}

         {cartItems.map((item) => (
  <div
    key={item.Id}
    className="flex justify-between items-center border-b pb-2"
  >
    <div className="relative">
    <div className="border border-[--border-primary] rounded w-16 h-16 flex items-center justify-center overflow-hidden">
      <img
        src={item.Image?.url}
        alt={item.name}
        className="object-cover w-full h-full"
      />
    </div>
    {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#35afa0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
          </div>


    <div className="flex-1 flex flex-col items-start px-2">
      <span className="font-medium">{item.name || "No name"}</span>
      <span className="text-sm text-gray-500">${item.price}</span>
    </div>
    </div>
    
     ))}
</div>
<span className="font-semibold">Total: ${totalPrice}</span>
    </>
  );
}
