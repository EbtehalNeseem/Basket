import { Checkbox } from "@/components/ui/checkbox.js";
import { Label } from "@/components/ui/label.js";
import { useFilterStore } from "../stores/filterStore.js";

export default function FilterItem({ name, catId }) {
  const { categoryId, setCategory } = useFilterStore();
  const handleChange = (catId) => {
    setCategory(categoryId === catId ? null : catId); // toggle off
    console.log(categoryId);
  };
  return (
    <div className="flex items-center gap-3 ">
      <Checkbox
        id={catId}
        className="data-[state=checked]:bg-[#00B853] data-[state=checked]:border-[#00B853] cursor-pointer "
        checked={categoryId === catId}
        onCheckedChange={() => handleChange(catId)}
      />
      <Label htmlFor={catId} className="text-[#71778E] font-normal text-sm">
        {name}
      </Label>
    </div>
  );
}
