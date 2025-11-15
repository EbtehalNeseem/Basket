import useProducts from "../Hooks/useProducts";

export default function Sort() {
  const { products, isLoading, error } = useProducts();
  if (isLoading) return null;
  if (error) return null;
  return (
    <div className="bg-[#F7F8FD] flex items-center justify-between px-4 md:px-10 py-3 w-full rounded-md max-w-[855px]">
      <span className="text-[#9B9BB4] font-normal text-xs">
        {products?.length} products
      </span>
      <div>
        <span className="text-[#9B9BB4] font-medium text-xs">Sort by: </span>
        <span className="text-[#202435] font-medium text-sm">
          Alphabetically, A-Z
        </span>
      </div>
    </div>
  );
}
