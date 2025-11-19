import React from "react";

export default function ContactSection() {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-bold text-[20px]">Contact</h3>
        <a
          href="/login"
          className="underline text-primary hover:text-black hover:border-0 "
        >
          Log in
        </a>
      </div>
      <form action="">
        <input
          className="w-full border px-2 py-3 my-2 rounded focus:outline-[#1773B0] "
          type="text"
          placeholder="Email or mobile phone number"
        />
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="peer hidden" />

          <span
            className="w-4 h-4 rounded border border-[#35AFA0] focus:outline-none 
           peer-checked:bg-[#35AFA0] peer-checked:border-[#35AFA0]
           flex items-center justify-center"
          >
            <i className="fas fa-check hidden peer-checked:block text-white text-[10px]"></i>
          </span>
          <span>Email me with news and offers</span>
        </label>
      </form>
    </>
  );
}
