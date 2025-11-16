import React from "react";

export default function DeliverySection() {
  return (
    <>
      <h3 className="font-bold text-[20px] mt-6">Delivery</h3>
      <form action="">
        <div className="relative pt-3">
          <input type="text"
            placeholder=" "
            className="w-full peer px-2 pt-5 pb-2 border border-gray-300 rounded focus:outline-[#1773B0]" />

          <label className="absolute left-2 top-2 text-gray-400 
                peer-placeholder-shown:top-6
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-md
                peer-focus:top-4
                peer-focus:text-sm
                transition-all">
            Country/Region
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3 py-2 ">
          <input className="border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="First Name (optional)" />
          <input className="border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="Last Name" />
        </div>
        <input className="w-full border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="Address" />
        <input className="w-full border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="Apartment, suite, etc. (optional)" />
        <div className="grid grid-cols-2 gap-3 py-2 ">
          <input className="border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="Postal code (optional)" />
          <input className="border px-2 py-3 my-2 rounded focus:outline-[#1773B0] " type="text" placeholder="City" />
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="peer hidden" />

          <span
            className="w-4 h-4 rounded border border-[#35AFA0] focus:outline-none 
           peer-checked:bg-[#35AFA0] peer-checked:border-[#35AFA0]
           flex items-center justify-center"
          >
            <i className="fas fa-check hidden peer-checked:block text-white text-[10px]"></i>
          </span>
          <span>Save this information for next time</span>
        </label>
      </form>

    </>
  );
}
