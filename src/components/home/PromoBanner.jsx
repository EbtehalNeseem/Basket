import PromoBanner1 from "../../assets/PromoBanner1.png";
import PromoBanner2 from "../../assets/PromoBanner2.png";

export default function PromoBanner() {
  const box =
    "relative rounded-xl overflow-hidden h-[160px] md:h-[250px] cursor-pointer";
  const textWrap =
    "absolute top-1/2 left-6 -translate-y-1/2  max-w-[160px] md:max-w-[220px]";
  const btn =
    "mt-2 inline-block text-xs text-white md:text-sm font-semibold px-5 py-2 rounded-full ";
  return (
    <section className="mx-auto max-w-[1200px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
        {/* Left Banner  */}
        <div className={box}>
          <img
            src={PromoBanner1}
            alt="Milk Banner"
            className="w-full h-full object-cover"
          />
          <div className={textWrap}>
            <h3 className="text-lg md:text-3xl font-bold">
              The freshest milk products
            </h3>
            <p className="text-[11px] md:text-[13px] text-gray-600">
              A family place for grocery
            </p>
            <button className={btn} style={{ backgroundColor: "#ED174A" }}>
              Shop Now
            </button>
          </div>
        </div>
        <div className={box}>
          <img
            src={PromoBanner2}
            alt="Milk Banner"
            className="w-full h-full object-cover"
          />
          <div className={textWrap}>
            <h3 className="text-lg md:text-3xl font-bold">
              Yogurt with Delicious Fruit
            </h3>
            <p className="text-[11px] md:text-[13px] text-gray-600">
              A family place for grocery
            </p>
            <button className={btn} style={{ backgroundColor: "#ED174A" }}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
