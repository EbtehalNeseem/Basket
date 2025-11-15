import { useQuery } from "@tanstack/react-query";
import FilterItem from "@/components/Shop/FilterItem.jsx";
import getCategories from "@/js/getCategories.js";
export default function ProductCategories() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  return (
    <div className="flex flex-col gap-5 min-h-[243.92px]">
      <h6 className="font-semibold">PRODUCT CATEGORIES</h6>
      <div className="flex flex-col gap-3">
        {data?.categories?.map((category) => (
          <FilterItem
            name={category.name}
            catId={category._id}
            key={category._id}
          />
        ))}
      </div>
    </div>
  );
}
