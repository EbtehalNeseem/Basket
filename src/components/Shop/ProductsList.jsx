import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilterStore } from "@/store/filterStore.js";
import Product from "@/components/Shop/Product.jsx";
import useProducts from "@/hooks/useProducts.js";

export default function ProductsList() {
  const { currentPage, productsPerPage, setPage } = useFilterStore();
  const { products, isLoading, error } = useProducts();

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = products?.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products?.length / productsPerPage);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.response.data.message}</p>;
  return (
    <>
      <div className=" flex flex-wrap justify-start w-full px-30 md:px-11 xl:px-0 max-w-[855px]">
        {currentProducts?.map((product) => {
          return (
            <Product
              key={product._id}
              name={product.Name}
              image={product.Image.url}
              review={product.review}
              price={product.Price}
              available={product.available}
            />
          );
        })}
      </div>
      <div className="flex gap-2 mt-6">
        <button
          className="cursor-pointer"
          onClick={() => {
            if (currentPage == 1) return;
            setPage(currentPage - 1);
          }}
        >
          <ChevronLeft
            className={`text-gray-500 ${currentPage == 1 ? "hidden" : ""}`}
          />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 w-9 h-9  rounded-full font-semibold text-sm cursor-pointer ${
              currentPage === i + 1 ? "bg-[#35AFA0] text-white" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="cursor-pointer"
          onClick={() => {
            if (currentPage >= totalPages) return;
            setPage(currentPage + 1);
          }}
        >
          <ChevronRight
            className={`text-gray-500 ${
              currentPage >= totalPages ? "hidden" : ""
            }`}
          />
        </button>
      </div>
    </>
  );
}
