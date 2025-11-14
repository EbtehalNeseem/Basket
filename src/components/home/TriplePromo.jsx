import React from "react";
import banner1 from "../../assets/Eggs.png";
import banner2 from "../../assets/Junk.png";
import banner3 from "../../assets/TastetheBest.png";

export default function TriplePromo() {
  const banners = [
    {
      label: "WEEKEND DISCOUNT 40%",
      title: "Natural Eggs",
      subtitle: "Eat one every day",
      cta: "Shop Now",
      img: banner1,
    },
    {
      label: "WEEKEND DISCOUNT 40%",
      title: "Taste the Best",
      subtitle: "Shine the morning",
      cta: "Shop Now",
      img: banner2,
    },
    {
      label: "WEEKEND DISCOUNT 40%",
      title: "Ditch the Junk",
      subtitle: "Breakfast made better",
      cta: "Shop Now",
      img: banner3,
    },
  ];

  const card = `
  relative overflow-hidden rounded-2xl border h-[180px] md:h-[230px]
  `;

  const textWrap = `
  absolute top-5 left-5 text-white `;

  const badge = `
  inline-block text-[10px] md:text-[11px] font-semibold  bg-white/20 backdrop-blur px-2 py-1 rounded
  `;

  const btn = `
  mt-3 inline-block rounded-full py-3 px-6 text-xs font-semibold leading-5 text-white shadow-sm bg-[#C2C2D3] hover:bg-[#C2C2D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
  `;

  return (
    <section className="mx-auto max-w-[1200px] px-4 my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((b, i) => (
          <div key={i} className={card}>
            <img
              src={b.img}
              alt={b.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 " />

            <div className={textWrap}>
              <span className={`${badge} text-green-500`}>{b.label}</span>
              <h3 className="mt-2 text-3xl md:text-4xl text-gray-800 font-bold">
                {b.title}
              </h3>
              <p className="text-[11px] md:text-[12px] mt-3 text-gray-400">
                {b.subtitle}
              </p>
              <button className={btn}>{b.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
