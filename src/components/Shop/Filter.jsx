import Availability from "@/components/Shop/Availability.jsx";
import Brands from "@/components/Shop/Brands.jsx";
import PriceRange from "@/components/Shop/PriceRange.jsx";
import ProductCategories from "@/components/Shop/ProductCategories.jsx";

export default function Filter() {
  return (
    <aside className="hidden xl:flex xl:px-4 xl:flex-col xl:gap-12">
      <ProductCategories />
      <Brands />
      <PriceRange />
      <Availability />
      <img src="/sidebar-banner.gif.jpg" alt="filter ad" />
    </aside>
  );
}
