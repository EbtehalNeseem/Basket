import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { HeartIcon, Share } from "lucide-react";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";

export default function Product({ name, image, available, review, price, id }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="border rounded-md border-[--border-primary] max-w-[213.5px] min-h-[395px] p-5 gap-5 flex flex-col items-center justify-between ">
      <div className="h-[152px]">
        <img src={image} alt="product image" />
      </div>
      <Dialog>
        <div className="flex flex-col justify-start w-full items-start">
          <DialogTrigger asChild>
            <span className="font-medium text-sm text-[#202435] leading-5 cursor-pointer hover:font-semibold hover:text-slate-600">
              {name}
            </span>
          </DialogTrigger>
          <span className="text-[--green-custom] font-semibold tracking-tighter uppercase text-xs">
            {available}
          </span>
          <span>{review} reviews</span>
          <span className="text-[--red-custom] font-medium">${price}</span>
        </div>
        <div className="rounded-4xl w-full flex overflow-hidden border-2 border-r-0 border-[--border-primary]">
          <button
            className="bg-[--border-primary] text-black font-bold px-4 py-2 border border-[--border-primary]"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <span className="flex-1 justify-center items-center flex ">
            {quantity}
          </span>
          <button
            className="bg-[--gold] text-black px-4 py-2 rounded-md ]"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <DialogContent className="min-w-[800px]">
          <div className="flex gap-4">
            <div className="border border-[--border-primary] rounded">
              <img src={image} alt="product image" />
            </div>
            <div className="flex flex-col gap-5">
              <DialogHeader>
                <DialogTitle className="text-2xl">{name}</DialogTitle>
                <DialogDescription className="font-bold text-black text-xl">
                  ${price}
                </DialogDescription>
              </DialogHeader>
              <div className="w-full bg-[#F3F5F9] flex gap-4 xl:px-20">
                <button
                  className=" text-black text-3xl px-4 py-2 border border-[--border-primary]"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="flex-1 justify-center items-center flex font-bold ">
                  {quantity}
                </span>
                <button
                  className=" text-[#595959] px-4 text-3xl py-2 rounded-md ]"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <AddToCartBtn id={id} quantity={Number(quantity)} />
              <div className="flex gap-4">
                <Button className="text-black w-1/2 hover:bg-[--hover-color]">
                  <HeartIcon />
                  Wishlist
                </Button>
                <Button className="text-black w-1/2 hover:bg-[--hover-color]">
                  <Share />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
