import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useFilterStore } from "@/store/filterStore.js";

export default function FilterItem({ name, catId }) {
  const { categoryId, setCategory } = useFilterStore();
  const handleChange = (catId) => {
    setCategory(categoryId === catId ? null : catId); // toggle off
  };
  return (
    <div className="flex items-center gap-3 ">
      <Checkbox
        id={catId}
        className="data-[state=checked]:bg-[--green-custom] data-[state=checked]:border-[--green-custom] cursor-pointer "
        checked={categoryId === catId}
        onCheckedChange={() => handleChange(catId)}
      />
      <Label htmlFor={catId} className="text-[#71778E] font-normal text-sm">
        {name}
      </Label>
    </div>
  );
}
