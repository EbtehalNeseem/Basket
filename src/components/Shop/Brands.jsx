import useBrands from "@/hooks/useBrands.js";
import BrandItem from "@/components/Shop/BrandItem.jsx";
export default function Brands() {
  const { data: brands } = useBrands();
  console.log(brands);
  return (
    <div className="flex flex-col gap-5 min-h-[243.92px]">
      <h6 className="font-semibold">BRANDS</h6>
      <div className="flex flex-col gap-3">
        {brands?.data?.map((brand) => (
          <BrandItem key={brand._id} name={brand.Name} id={brand._id} />
        ))}
      </div>
    </div>
  );
}
