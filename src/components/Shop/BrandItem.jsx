import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useProducts from "@/hooks/useProducts";
export default function BrandItem({ name, id }) {
  const { products } = useProducts();
  const count = products?.filter(
    (product) => product.Brand.Name === name
  ).length;
  return (
    <div className="flex items-center gap-3 ">
      <Checkbox
        id={id}
        className="data-[state=checked]:bg-[--green-custom] data-[state=checked]:border-[--green-custom] cursor-pointer "
      />
      <Label htmlFor={id} className="text-[#71778E] font-normal  text-sm">
        {name}
      </Label>
      <span className="text-[#71778E] text-sm ml-auto">({count})</span>
    </div>
  );
}
``;
