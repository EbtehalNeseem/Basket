import heroImg from "../../assets/slider-image-3.jpg.png";
const GREEN = "#17a589";

export default function Hero({
  badge = { text: "EXCLUSIVE OFFER", off: "20% OFF" },
  title = "Specialist in the grocery store",
  subtitle = "Only this week. Don’t miss…",
  fromPrice = "$7.99",
  ctaText = "Shop Now",
  heroSrc = heroImg,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:py-10 relative">
        {/* IMAGE BACKGROUND */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <img
            src={heroSrc}
            alt="hero banner"
            className="w-full h-[300px] md:h-[380px] object-cover rounded-2xl"
          />

          {/* OVERLAY TEXT */}
          <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 text-left text-gray-900 max-w-[350px]">
            {/* badge */}
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center h-7 px-3 rounded-full text-white text-[11px] tracking-wide"
                style={{ backgroundColor: GREEN }}
              >
                {badge.text}
              </span>
              <span className="text-[11px] font-semibold text-[rgb(255,136,0)]">
                {badge.off}
              </span>
            </div>

            {/* title */}
            <h1 className="mt-3 md:mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              {title}
            </h1>

            {/* subtitle */}
            <p className="mt-2 text-sm md:text-base text-gray-700">{subtitle}</p>

            {/* price */}
            <div className="mt-4 text-sm text-gray-700">
              FROM{" "}
              <span className="text-[rgb(255,79,79)] text-4xl font-extrabold">
                {fromPrice}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm"
                style={{ backgroundColor: GREEN }}
              >
                {ctaText} <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}