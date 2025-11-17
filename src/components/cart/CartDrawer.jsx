import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
  DrawerDescription,
} from "../ui/drawer";
import { Button } from "../ui/button";
import CartItem from "./CartItem";
import useCart from "@/hooks/useCart";

export default function CartDrawer({ isOpen, setIsOpen }) {
  const { cartItems, totalPrice, isLoading, error } = useCart();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading cart.</p>;
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="max-w-sm ml-auto overflow-x-hidden h-full ">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="text-primary">My Cart</DrawerTitle>
          <DrawerDescription className="text-gray-500">
            {cartItems.length} Products
          </DrawerDescription>
        </DrawerHeader>
        {/* Cart items */}
        <div className="p-4 overflow-y-auto space-y-4">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}

          {cartItems.map((item) => (
            <CartItem key={item.Id} item={item} />
          ))}
        </div>

        <DrawerFooter className="flex flex-col space-y-2">
          <span className="font-semibold text-2xl tracking-wide">
            Total: ${parseFloat(totalPrice.toFixed(2))}
          </span>
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
