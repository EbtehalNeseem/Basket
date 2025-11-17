import React from "react";
import OrderItem from "./OrderItem";
import useCart from "../../hooks/useCart";

export default function OrderSummary() {
  const { cartItems , totalPrice} = useCart();
  return (
    <>
      <div className="p-4 overflow-y-auto space-y-4">
        {cartItems.map((item) => (
          <OrderItem key={item.Id} item={item} />
        ))}
      </div>
     <div className="grid grid-row-3 gap-4">
       <div className="flex justify-between">
        <span>
        subtotal . {cartItems.length}
      </span>
      <span>
        ${totalPrice}
      </span>
      </div>
      <div className="flex justify-between">
        <span>
        Shipping
      </span>
      <span>
        FREE
      </span>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col justify-between">
          <span className="text-[20px] font-bold" >
        Total
      </span>
      <span className="text-[#666666]">
        including $2.46 in taxes
      </span>
        </div>
      <div>
         <span className="text-[#666666] mr-2">USD</span>${totalPrice +2.46}
      </div>
      </div>
     </div>
    </>
  );
}
