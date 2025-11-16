import { useEffect, useRef, useState, useMemo } from "react";
import { api } from "../../lib/api";

const ENDPOINT = "/product/get-all-product";
const BTN_YELLOW = "#ffd166";
const ARROW_BG = "#f3f4f6";
const STAR = "★";
const GREEN = "#17a589";

////////////////////////// Utils //////////////////////////////
function formatPrice(v) {
  if (v === undefined || v === null) return "";
  const n = Number(v);
  return isNaN(n) ? v : `$${n.toFixed(2)}`;
}
function normalize(p) {
  const price =
    p?.priceAfterDiscount ?? p?.finalPrice ?? p?.Price ?? p?.price ?? null;
  const old =
    p?.priceBeforeDiscount ??
    p?.compareAt ??
    p?.originalPrice ??
    p?.OldPrice ??
    null;

  const disc =
    p?.discount ??
    (old && price
      ? Math.round(((Number(old) - Number(price)) / Number(old)) * 100)
      : null);

  const img =
    p?.Image?.secure_url ||
    p?.Image?.url ||
    p?.image?.secure_url ||
    p?.image?.url ||
    p?.images?.[0]?.secure_url ||
    p?.images?.[0]?.url ||
    p?.url ||
    p?.thumbnail ||
    "https://via.placeholder.com/240x240?text=Product";

  return {
    id: p?._id || p?.id,
    title: p?.title || p?.Name || p?.productName || "Product",
    img,
    price,
    old,
    disc,
    stockText:
      typeof p?.available === "string"
        ? p.available
        : p?.stock ?? p?.quantity ?? "InStock",
    rating: Number(p?.rating ?? p?.review ?? 4.5),
    reviewsCount: p?.reviewsCount ?? 1,
  };
}

// ////////////////////////// Small Product Card ////////////////////////////
function FPCard({ item }) {
  return (
    <div className="shrink-0 w-[200px] sm:w-[240px] lg:w-[220px] xl:w-[230] px-2">
      <div className="relative h-full rounded-xl border bg-white hover:shadow transition-all duration-200 p-3 felx flex-col overflow-hidden box-border">
        {/* discount ribbon */}
        {!!item.disc && item.disc > 0 && (
          <span
            className="absolute left-0 top-3 text-[11px] text-white font-semibold px-2 py-1 rounded-r-md shadow"
            style={{ backgroundColor: GREEN }}
          >
            -{item.disc}%
          </span>
        )}

        {/* image */}
        <div className="flex-1 grid place-content-center bg-gray-50 rounded">
          <img
            src={item.img}
            alt={item.title}
            className="max-h-32 object-contain"
          />
        </div>

        {/* content */}
        <div className="mt-2 text-[12px] text-green-600 font-semibold">
          {item.stockText}
        </div>
        <h4 className="mt-1 text-[13px] font-semibold text-gray-800 line-clamp-2 h-[34px]">
          {item.title}
        </h4>

        <div className="mt-1 flex items-center gap-1 txet-[12px] text-yellow-500">
          <span>{item.rating}</span>
          <span>{STAR.repeat(item.rating)}</span>
          <span>({item.reviewsCount})</span>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-800">
            {formatPrice(item.price)}
          </span>
          {item.old && (
            <span className="text-[12px] text-gray-500 line-through">
              {formatPrice(item.old)}
            </span>
          )}
        </div>

        {/* add to cart */}
        <button
          className="mt-3 w-full rounded-md py-2 text-[13px] font-semibold"
          style={{ background: BTN_YELLOW }}
          onClick={() => console.log("add to cart:", item.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}


/*---------------------------------- Section ----------------------------------*/
export default function FeaturedProducts() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await api.get(ENDPOINT);
          const list = Array.isArray(data) ? data : (data.products || []);
          const normalized = list.map((p, i) => normalize(p, i));
          setRows(normalized.slice(0, 10));
        } catch (e) {
          console.error("fetch featured products error:", e);
          setRows([]);
        } finally {
          setLoading(false);
        }
      })();
    }, []);


    const skeleton = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="shrink-0 w-[220px] sm:w-[240px] lg:w-[220px] xl:w-[230px] px-2">
          <div className="rounded-xl border p-3">
            <div className="h-32 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 bg-gray-100 rounded mt-3 w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-100 rounded mt-2 w-1/2 animate-pulse" />
            <div className="h-8 bg-gray-100 rounded mt-3 animate-pulse" />
          </div>
        </div>
      )),
    []
  );

  const scrollBy = (delta) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };




  return(
    <section className="mx-auto max-w-[1200px] px-4 my-10">
        {/* header */}
        <div className="flex items-end justify-between">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">FEATURED PRODUCTS</h3>
                <p className="text-[12px] text-gray-500">Do not miss the current offers until the end of March.</p>
            </div>
            <button className="text-[12px] rounded-full border px-3 py-1.5 hover:bg-gray-50">View All</button>
        </div>
        {/* carousel */}
      <div className="mt-4 relative">
        {/* arrows */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => scrollBy(-600)}
            className="w-9 h-9 grid place-items-center rounded-full border shadow"
            style={{ background: ARROW_BG }}
            aria-label="Prev"
          >
            ‹
          </button>
        </div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => scrollBy(600)}
            className="w-9 h-9 grid place-items-center rounded-full border shadow"
            style={{ background: ARROW_BG }}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth -mx-2 px-2 no-scrollbar"
        >
          {loading ? skeleton : rows.map((p) => <FPCard key={p.id} item={p} />)}
        </div>
      </div>



    </section>
  )
}