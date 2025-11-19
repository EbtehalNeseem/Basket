import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import ProductCard from "../components/Shop/ProductCard";

const ENDPOINT = "/product/get-all-product";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q.trim()) { setItems([]); return; }
    let cancel = false;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          `${ENDPOINT}?keyword=${encodeURIComponent(q)}`
        );
        const arr = Array.isArray(data) ? data : (data.products || data.data || []);
        if (!cancel) setItems(arr);
      } catch (e) {
        if (!cancel) setItems([]);
        console.error("search page error:", e);
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => (cancel = true);
  }, [q]);

  return (
    <section className="mx-auto max-w-[1200px] px-4 my-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Search</h1>
          <p className="text-sm text-gray-500">
            Showing results for: <b>{q}</b> ({items.length})
          </p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-6 animate-pulse border rounded-xl">
              <div className="h-40 bg-gray-100 rounded" />
              <div className="h-4 bg-gray-100 rounded mt-3 w-3/4" />
              <div className="h-3 bg-gray-100 rounded mt-2 w-1/2" />
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-sm text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((p) => (
            <ProductCard key={p._id || p.id} item={p} />
          ))}
        </div>
      )}
    </section>
  );
}