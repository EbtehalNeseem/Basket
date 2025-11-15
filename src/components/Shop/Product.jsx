export default function Product({ name, image, available, review, price }) {
  return (
    <div className="border rounded-md border-[#EDEEF5] max-w-[213.5px] min-h-[395px] p-5 gap-5 flex flex-col items-center justify-between ">
      <div className="h-[152px]">
        <img src={image} alt="product image" />
      </div>
      <div className="flex flex-col justify-start w-full items-start">
        <span className="font-medium text-sm text-[#202435] leading-5">
          {name}
        </span>
        <span className="text-[--green-custom] font-semibold tracking-tighter uppercase text-xs">
          {available}
        </span>
        <span>{review} reviews</span>
        <span className="text-[--red-custom] font-medium">${price}</span>
      </div>
      <div className="rounded-4xl w-full flex overflow-hidden border-2 border-r-0 border-[#EDEEF5]">
        <button className="bg-[#EDEEF5] text-black font-bold px-4 py-2 border border-[#EDEEF5]">
          -
        </button>
        <span className="flex-1 justify-center items-center flex ">0</span>
        <button className="bg-[--gold] text-black px-4 py-2 rounded-md ]">
          +
        </button>
      </div>
    </div>
  );
}
