const GREEN = "#17a589";
const STAR = "★";

function formatPrice(v) {
  if (v === undefined || v === null) return "";
  const n = Number(v);
  return isNaN(n) ? v : `$${n.toFixed(2)}`;
}

export default function ProductCard({ item }) {
  console.log("item", item);
  // title
  const title = item?.title || item?.Name || item?.productName || "Product";

  // image
  const img =
    item?.Image?.secure_url ||
    item?.Image?.url ||
    item?.url ||
    item?.image?.secure_url ||
    item?.image?.url ||
    item?.images?.[0]?.secure_url ||
    item?.images?.[0]?.url ||
    item?.thumbnail ||
    "";

  // prices
  const price =
    item?.priceAfterDiscount ??
    item?.finalPrice ??
    item?.Price ??
    item?.price ??
    null;

  const old =
    item?.priceBeforeDiscount ??
    item?.compareAt ??
    item?.originalPrice ??
    item?.OldPrice ??
    undefined;

  const disc =
    item?.discount ??
    (old && price
      ? Math.round(((Number(old) - Number(price)) / Number(old)) * 100)
      : undefined);

  // stock / reviews
  const stockText =
    typeof item?.available === "string"
      ? item.available
      : item?.stock ?? item?.quantity ?? "InStock";

  const rating = item?.rating ?? item?.review ?? 4.5;
  const reviewsCount = item?.reviewsCount ?? 1;

  return (
    <div className="pt-4 pb-3 px-3">
      <div className="relative">
        {disc > 0 && (
          <span
            className="absolute -top-3 left-0 rounded-md px-2 py-1 text-[11px] text-white"
            style={{ backgroundColor: GREEN }}
          >
            {disc}%
          </span>
        )}

        <div className="h-32 grid place-items-center bg-gray-50 rounded">
          {img ? (
            <img src={img} alt={title} className="max-h-36 object-contain" />
          ) : (
            <div className="text-gray-400 text-sm">No image</div>
          )}
        </div>
      </div>

      <h3 className="mt-5 text-[13px] text-center md:text-[14px] font-semibold  text-gray-800 line-clamp-1">
        {title}
      </h3>

      <div className="mt-1 text-[12px] text-green-600 font-semibold text-center">
        {stockText}
      </div>

      <div className="mt-1 flex items-center justify-center gap-1 text-[12px] text-yellow-500 text-center">
        <span className="text-center">{STAR.repeat(5)}</span>
        <span className="text-gray-500 text-center">{reviewsCount} review</span>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-[15px] font-bold text-red-500">
          {formatPrice(price)}
        </span>
        {old && (
          <span className="text-[12px] text-gray-400 line-through">
            {formatPrice(old)}
          </span>
        )}
      </div>

      <div className="mt-2 text-[11px] text-gray-500">
        the available products: <b>{String(stockText).toLowerCase()}</b>
      </div>
    </div>
  );
}
