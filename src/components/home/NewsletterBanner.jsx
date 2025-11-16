import discountImg from "../../assets/discountImg.png"; 

export default function NewsletterBanner() {
  return (
    <section
      className="relative overflow-hidden text-white py-10 mt-16"
      style={{ backgroundColor: "#35AFA0" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row-reverse items-center justify-between gap-6 relative z-10">
        
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={discountImg}
            alt="50% Discount Coupon"
            className="w-[280px] md:w-[420px] rotate-[-10deg] opacity-95"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="uppercase text-sm tracking-wide opacity-90">
            Get discount for your first order
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
            Join our newsletter and get <span className="text-yellow-300">50% off</span>
          </h2>
          <p className="mt-4 text-xs">
            Join our email subscription now to get updates
on promotions and coupons.
          </p>


          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white rounded-full overflow-hidden shadow-sm w-full mt-6 max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-700 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#2E8B7C] hover:bg-[#277667] text-white font-semibold text-sm px-6 py-3 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}