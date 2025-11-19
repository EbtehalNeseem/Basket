


import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import ProductCard from "../Shop/ProductCard";
import imagBestSellers from "../../assets/BestSellers.png";
import TriplePromo from "./TriplePromo";

const ENDPOINT = "/product/get-all-product";

export default function BestSellers() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(ENDPOINT);
        const list = Array.isArray(data) ? data : (data.products || data.data || []);
        setItems(list.slice(0, 8)); 
      } catch (e) {
        console.error("fetch best sellers error:", e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const left = loading ? Array.from({ length: 4 }) : items.slice(0, 4);
  const right = loading ? Array.from({ length: 4 }) : items.slice(4, 8);

  const Skeleton = () => (
    <div className="p-6 h-full">
      <div className="h-40 bg-gray-100 rounded animate-pulse" />
      <div className="h-4 bg-gray-100 rounded mt-3 w-3/4 animate-pulse" />
      <div className="h-3 bg-gray-100 rounded mt-2 w-1/2 animate-pulse" />
    </div>
  );

  return (
    <section className="mx-auto max-w-[1200px] px-4 my-10 overflow-hidden h-[780px] ">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">BEST SELLERS</h3>
          <p className="text-[12px] text-gray-500">
            Do not miss the current offers until the end of month.
          </p>
        </div>
        <button className="text-[12px] rounded-full border px-3 py-1.5 hover:bg-gray-50">
          View All
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2 gap-4 ">
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {left.map((p, i) => (
            <div key={p?._id || `l-${i}`} className="border rounded-xl h-full flex flex-col">
              {loading ? <Skeleton /> : <ProductCard item={p} />}
            </div>
          ))}
        </div>

        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-[610px] box-border">
          <img
            src={imagBestSellers}
            alt="Promo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute left-6 top-6 md:left-8 md:top-8 text-white max-w-[260px]">
            <span className="uppercase text-xs tracking-wide opacity-80 text-red-500">delicious</span>
            <h4 className="text-2xl md:text-3xl font-bold leading-tight mt-1">
              The freshest of <hr /> all products
            </h4>
            <p className="text-xl font-semibold mt-2 text-gray-500">
              Just in Bacola
            </p>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {right.map((p, i) => (
            <div key={p?._id || `r-${i}`} className="border rounded-xl h-full">
              {loading ? <Skeleton /> : <ProductCard item={p} />}
            </div>
          ))}
        </div>
      </div>

      {!loading && items.length === 0 && (
        <div className="mt-6 text-center text-sm text-gray-500">
          No products to show right now.
        </div>
      )}

      {/*  */}
    </section>
  );
}


