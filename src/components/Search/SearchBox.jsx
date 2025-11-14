import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import useDebounce from "../../hooks/UseDebounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ENDPOINT = "/product/get-all-product"; // بيدعم ?keyword=

function pickImage(p) {
  return (
    p?.Image?.secure_url ||
    p?.Image?.url ||
    p?.image?.secure_url ||
    p?.image?.url ||
    p?.images?.[0]?.secure_url ||
    p?.images?.[0]?.url ||
    p?.thumbnail ||
    "https://via.placeholder.com/60x60?text=%20"
  );
}

export default function SearchBox({ className = "" }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(q, 400);
  const nav = useNavigate();
  const wrapRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    if (!debounced || debounced.trim().length < 2) {
      setList([]);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          `${ENDPOINT}?keyword=${encodeURIComponent(debounced)}&limit=6`
        );
        const arr = Array.isArray(data)
          ? data
          : data.products || data.data || [];
        if (!cancelled) setList(arr.slice(0, 6));
      } catch (e) {
        if (!cancelled) setList([]);
        console.error("search suggest error:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => (cancelled = true);
  }, [debounced]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    setOpen(false);
    nav(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full border overflow-hidden focus-within:ring-2 focus-within:ring-[#35AFA0]"
      >
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search for products..."
          className="px-4 py-2.5 text-sm outline-none flex-1 rounded-md"
        />
        <button type="submit" className="px-4 py-2.5   text-sm font-semibold">
          <MagnifyingGlassIcon className="w-5 h-5 " />
        </button>
      </form>

      {/* Dropdown */}
      {open && (loading || list.length > 0) && (
        <div className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden">
          {loading && (
            <div className="p-3 text-sm text-gray-500">Searching…</div>
          )}
          {!loading && list.length === 0 && (
            <div className="p-3 text-sm text-gray-500">No results</div>
          )}
          {!loading && list.length > 0 && (
            <ul className="divide-y">
              {list.map((p) => (
                <li
                  key={p._id || p.id}
                  onClick={() =>
                    nav(
                      `/search?q=${encodeURIComponent(p.Name || p.title || "")}`
                    )
                  }
                  className="flex items-center gap-3 p-2.5 hover:bg-gray-50 cursor-pointer"
                >
                  <img
                    src={pickImage(p)}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">
                      {p.Name || p.title || p.productName || "Product"}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      $
                      {Number(
                        p.price ?? p.finalPrice ?? p.priceAfterDiscount ?? 0
                      ).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
              <li className="p-2.5">
                <button
                  onClick={() => handleSubmit(new Event("submit"))}
                  className="w-full text-center text-sm font-semibold text-[#35AFA0]"
                >
                  View all results
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
