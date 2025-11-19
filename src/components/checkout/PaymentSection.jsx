import React from "react";
import icon from "../../assets/svg.png" 
export default function PaymentSection() {
  return (
    <>
          <div className="border-b pb-10">
            <h3 className="font-bold text-[20px] mt-6">Payment</h3>
          <p>All transactions are secured and encrypted.</p>
          <div className="w-full h-[150px] bg-[#F5F5F5] my-3 rounded flex flex-col justify-center items-center ">
            <img src={icon} alt="" />
            <span className="text-[#707070]">this store can't accept payment right now.</span>
          </div>
          <div className="w-full h-[50px] bg-[#F5F5F5] my-5 rounded flex flex-col justify-center items-center ">
            <span className="text-[#707070]">Pay Now</span>
          </div>

          </div>
          <a href="" className="underline text-primary hover:border-0">Privacy Policy</a>

    </>
  );
}
