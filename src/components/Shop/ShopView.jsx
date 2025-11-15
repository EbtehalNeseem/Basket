import ProductsList from "./ProductsList.jsx";
import Sort from "./Sort.jsx";

export default function ShopView() {
  return (
    <section className=" flex flex-col items-center  gap-5 xl:pr-4 xl:pl-7 overflow-hidden">
      <div className="flex flex-col gap-5">
        <img src="/Container.webp" alt="hero image" />
        <Sort />
      </div>
      <ProductsList />
    </section>
  );
}
