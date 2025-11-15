import useWishlist from "../hooks/UseWishlist";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="px-20">
      <h2 className="text-primary text-[40px]">My Wishlist</h2>

      {wishlist.length === 0 && <p className="py-5 ">No products yet.</p>}

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} />
            <h3>{item.title}</h3>

            <button onClick={() => removeFromWishlist(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
