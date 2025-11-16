import { useEffect, useRef, useState, useMemo } from "react";
import { api } from "../../lib/api";

const ARROW_BG = "#f3f4f6";
const ENDPOINT = "/category/get-category";

// const FALLBACKS = [
//   "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600",
//   "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600",
//   "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600",
//   "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=600",
// ];

function normalizeCategory(c, idx) {
  const imageUrl =
    c?.image?.url || c?.Image?.url || FALLBACKS[idx % FALLBACKS.length];

  return {
    id: c?._id || c?.id || c?.slug || c?.name || `cat-${idx}`,
    name: c?.name || c?.title || "Category",
    imageUrl,
    count: c?.itemsCount ?? c?.productsCount ?? c?.count ?? "",
  };
}

function CategoryCard({ item }) {
  return (
    <div className="shrink-0 w-[140px] md:w-[170px] px-2">
      <div className="rounded-xl border p-3 grid place-content-center bg-white hover:shadow-md transition-all duration-200">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-20 md:h-24 object-contain"
          loading="lazy"
          onError={(e) => (e.currentTarget.src = FALLBACKS[0])}
        />
        <div className="mt-2 text-center">
          <div className="text-[13px] md:text-[14px] font-semibold text-gray-800 line-clamp-1">
            {item.name}
          </div>
          {item.count !== "" && (
            <div className="text-[11px] text-gray-500">{item.count} items</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CategoriesScroller() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(ENDPOINT);
        const list = Array.isArray(data) ? data : data.categories || [];
        setRows(list.map((c, i) => normalizeCategory(c, i)));
      } catch (e) {
        console.error("fetch categories error:", e);
        setRows([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const skeleton = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="shrink-0 w-[140px] md:w-[170px] px-2">
          <div className="rounded-xl border p-3">
            <div className="h-20 md:h-24 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 bg-gray-100 rounded mt-3 w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-100 rounded mt-2 w-1/2 animate-pulse" />
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

  return (
    <section className="mx-auto max-w-[1200px] px-4 my-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Shop by Category
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-320)}
            className="w-8 h-8 grid place-items-center rounded-full border"
            style={{ background: ARROW_BG }}
            aria-label="Prev"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="w-8 h-8 grid place-items-center rounded-full border"
            style={{ background: ARROW_BG }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth -mx-2 px-2 no-scrollbar border p-3 rounded-lg"
      >
        {loading
          ? skeleton
          : rows.map((c) => <CategoryCard key={c.id} item={c} />)}
      </div>
    </section>
  );
}




