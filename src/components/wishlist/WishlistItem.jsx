import { removeFromWishlist } from "@/js/Wishlist";

export default function WishlistItem({ item }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div className="border border-[--border-primary] rounded w-16 h-16 overflow-hidden">
        <img
          src={item.Image?.url}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 flex flex-col px-2">
        <span className="font-medium">{item.name || "No name"}</span>
        <span className="text-sm text-gray-500">${item.price}</span>
      </div>

      <button
        className="p-1"
        onClick={() => removeFromWishlist(item.id)}
      >
        <i className="fa-solid fa-trash text-red-500"></i>
      </button>
    </div>
  );
}
