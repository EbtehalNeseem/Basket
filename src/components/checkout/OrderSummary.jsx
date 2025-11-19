import React from "react";
import CartItem from "../cart/CartItem";
import useCart from "@/hooks/useCart";

export default function OrderSummary() {
  const { cartItems, totalPrice, isLoading, error } = useCart();
  if (isLoading)
    return (
      <h6 className="text-slate-500 text-center text-2xl h-full">
        Loading cart items...
      </h6>
    );

  return (
    <div>
      {error && <p>Failed to load cart items.</p>}

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <span className="font-semibold text-2xl tracking-wide mt-4 inline-block">
        Total: ${parseFloat(totalPrice.toFixed(2)) || 0}
      </span>
    </div>
  );
}
