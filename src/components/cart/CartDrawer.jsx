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

export default function CartDrawer({ isOpen, setIsOpen }) {
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
        <div className="p-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <span>Item 1</span>
            <span>$10</span>
            <span className="grid grid-cols-3 gap-3">
              <i className="fa-solid fa-circle-minus text-primary"></i>
            <i className="fa-solid fa-circle-plus text-primary"></i>
              <i className="fa-solid fa-trash text-primary hover:text-red-600"></i>
            </span>
          </div>
        </div>
        <DrawerFooter >
          <Button><a href="/checkout" className="text-primary">Checkout</a></Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
