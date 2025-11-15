import Filter from "@/components/Shop/Filter.jsx";
import ShopView from "@/components/Shop/ShopView.jsx";

const Shop = () => {
  return (
    <main className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-[300px_1fr] xl:mb-[115px] ">
      <Filter />
      <ShopView />
    </main>
  );
};

export default Shop;
