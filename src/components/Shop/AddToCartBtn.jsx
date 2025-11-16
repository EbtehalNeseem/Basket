// import { ShoppingBag } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import addToCart from "@/js/addToCart";
// import { useUserToken } from "@/store/userStore.js";

// function AddToCartBtn({ id, quantity }) {
//   const userId = useUserToken((state) => state.userId);

//   return (
//     <Button
//       className="bg-[--primary] hover:bg-[--hover-color]"
//       onClick={() => {
//         addToCart(userId, id, quantity);
//       }}
//     >
//       <ShoppingBag />
//       Add to Cart
//     </Button>
//   );
// }

// export default AddToCartBtn;


import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import addToCart from "@/js/addToCart";

function AddToCartBtn({ id, quantity = 1 }) {

  return (
    <Button
      className="bg-[--primary] hover:bg-[--hover-color]"
      onClick={() => {
        addToCart(id, quantity); 
      }}
    >
      <ShoppingBag />
      Add to Cart
    </Button>
  );
}

export default AddToCartBtn;
