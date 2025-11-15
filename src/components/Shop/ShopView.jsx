import ProductsList from "@/components/Shop/ProductsList.jsx";
import Sort from "@/components/Shop/Sort.jsx";
import heroImage from "@/assets/Container.webp";
export default function ShopView() {
  return (
    <section className=" flex flex-col items-center  gap-5 xl:pr-4 xl:pl-7 ">
      <div className="flex flex-col gap-5">
        <img src={heroImage} alt="hero image" />
        <Sort />
      </div>
      <ProductsList />
    </section>
  );
}
