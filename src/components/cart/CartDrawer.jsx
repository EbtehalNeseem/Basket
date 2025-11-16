// CartDrawer.jsx
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { useCartStore } from "../../store/cartstore";

export default function CartDrawer({ isOpen, setIsOpen }) {
    const { cartItems, totalPrice, removeFromCart, addToCart  } = useCartStore();

     if (!cartItems) return <p>Loading...</p>;

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right" >
      <DrawerContent className="max-w-sm ml-auto overflow-x-hidden h-full ">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="text-primary">My Cart</DrawerTitle>
          <DrawerClose asChild>
            <div onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-x text-[15px] text-red-600"></i>
            </div>
          </DrawerClose>
        </DrawerHeader>
         {/* Cart items */}
        <div className="p-4 overflow-y-auto space-y-4">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}

         {cartItems.map((item) => (
  <div
    key={item.Id}
    className="flex justify-between items-center border-b pb-2"
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
      <button
        onClick={() => addToCart(item.productId, -1)}
        className="p-1"
      >
        <i className="fa-solid fa-circle-minus text-primary"></i>
      </button>

      <span>{item.quantity}</span>

      <button
        onClick={() => addToCart(item.productId, 1)}
        className="p-1"
      >
        <i className="fa-solid fa-circle-plus text-primary"></i>
      </button>

      <button
        onClick={() => removeFromCart(item.productId)}
        className="p-1"
      >
        <i className="fa-solid fa-trash text-red-600 hover:text-red-800"></i>
      </button>
    </div>
  </div>
          ))}
        </div>

          <DrawerFooter className="flex flex-col space-y-2">
          <span className="font-semibold">Total: ${totalPrice}</span>
          <Button onClick={() => setIsOpen(false)}>
            <a href="/checkout" className="text-primary">
              Checkout
            </a>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
