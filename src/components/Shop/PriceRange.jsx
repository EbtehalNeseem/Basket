import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFilterStore } from "@/store/filterStore.js";

export default function PriceRange() {
  const { minPrice, maxPrice, setPriceRange } = useFilterStore();
  return (
    <div className="flex flex-col gap-5 ">
      <h6 className="font-semibold">PRICE</h6>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <Label className="text-[#71778E] text-sm font-normal">FROM</Label>
          <Input
            className="bg-[#F3F4F7] border-none rounded-none"
            value={minPrice}
            onChange={(e) => setPriceRange(+e.target.value, maxPrice)}
          />
        </div>
        <span className="h-2">-</span>
        <div className="flex flex-col gap-2">
          <Label className="text-[#71778E] text-sm font-normal">TO</Label>
          <Input
            className="bg-[#F3F4F7] border-none rounded-none"
            value={maxPrice}
            onChange={(e) => setPriceRange(minPrice, +e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
