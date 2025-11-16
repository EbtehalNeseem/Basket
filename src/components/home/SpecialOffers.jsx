// src/components/Home/SpecialOffers.jsx
import React, { useEffect, useState } from "react";
import { api } from "../../lib/api";
import ProductCard from "../Shop/ProductCard";

const BORDER_RED = "#e26d79";
const ENDPOINT = "/offer/get-all-offer";

function Countdown() {
  const box =
    "w-10 h-8 md:w-12 md:h-9 grid place-items-center rounded-md text-white text-[12px] md:text-[13px]";
  return (
    <div className="flex items-center justify-center gap-2 mt-2">
      <span className={box} style={{ background: "#ED174A" }}>
        71
      </span>
      <span className={box} style={{ background: "#ED174A" }}>
        14
      </span>
      <span className={box} style={{ background: "#ED174A" }}>
        43
      </span>
      <span className={box} style={{ background: "#ED174A" }}>
        16
      </span>
    </div>
  );
}

export default function SpecialOffers() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(ENDPOINT);
        const list = Array.isArray(data) ? data : data.data || [];
        setItems(list.slice(0, 5));
      } catch (e) {
        console.error("fetch top offers error:", e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="mx-auto max-w-[1200px] px-4 mt-10">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Special Offers of the week!
        </h2>
        <p className="text-[12px] md:text-[13px] text-gray-500 mt-1">
          Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
        </p>
        <Countdown />
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: `2px solid ${BORDER_RED}` }}
      >
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-6 animate-pulse">
                <div className="h-40 bg-gray-100 rounded" />
                <div className="h-4 bg-gray-100 rounded mt-3 w-3/4" />
                <div className="h-3 bg-gray-100 rounded mt-2 w-1/2" />
                <div className="h-5 bg-gray-100 rounded mt-4 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {items.map((item) => (
              <ProductCard key={item._id || item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
