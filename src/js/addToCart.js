// import { api } from "@/lib/api";
// import { useUserToken } from "@/store/userStore.js";

// async function addToCart(userId, productId, quantity) {
//   const accessToken = useUserToken.getState().accessToken;

//   const { data } = await api.post(
//     "/cart/add-cart",
//     {
//       userId,
//       productId,
//       quantity,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );
//   console.log(data);
//   return data;
// }

// export default addToCart;
export default async function addToCart(productId, quantity = 1) {
  const cartStore = useCartStore.getState(); 
  const cartItems = [...cartStore.cartItems];
  const existingItem = cartItems.find(item => item.productId === productId);

  // Local update — نفس شكل ال API
  if (existingItem) {
    existingItem.quantity += quantity;

    if (existingItem.quantity <= 0) {
      cartItems.splice(cartItems.indexOf(existingItem), 1);
    }

  } else if (quantity > 0) {
    cartItems.push({
      Id: Math.random().toString(),
      productId,
      name: "Loading...",
      price: 0,
      quantity,
      Image: { url: "" }
    });
  }

  // Update store locally
  useCartStore.setState({
    cartItems,
    totalPrice: cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
    count: cartItems.reduce((acc, item) => acc + item.quantity, 0),
  });

  // Send request to backend
  try {
    const { userId, accessToken } = useUserToken.getState();

    await api.post(
      "/cart/add-cart",
      { userId, productId, quantity },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    // 🔥🔥 هنا بقى تحطّي await — تبع request
    await useCartStore.getState().fetchCart();

  } catch (err) {
    console.error("Failed to sync cart with server", err);
  }
}
