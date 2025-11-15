import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useProducts from "@/hooks/useProducts.js";

export default function AvailabilityItem({ name, id }) {
  const { products } = useProducts();
  const count = products?.filter((product) => product.available === id).length;
  return (
    <div className="flex items-center gap-3 ">
      <Checkbox
        id={id}
        className="data-[state=checked]:bg-[#00B853] data-[state=checked]:border-[#00B853] cursor-pointer "
      />
      <Label htmlFor={id} className="text-[#71778E] font-normal  text-sm">
        {name}
      </Label>
      <span className="text-[#71778E] text-sm ml-auto">({count})</span>
    </div>
  );
}
