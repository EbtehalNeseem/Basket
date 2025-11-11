// src/components/ShippingMethod.jsx
import React from "react";
import { RadioGroup } from "@/components/ui/radio-group"; 
import { Label } from "@/components/ui/label";

export default function ShippingMethod({ shippingMethod, setShippingMethod, disabled }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-medium mb-2">Shipping method</h3>

      <div className="space-y-2">
        <label className={`block p-3 border rounded ${shippingMethod === "standard" ? "border-blue-300 bg-blue-50" : "border-gray-200"}`}>
          <input type="radio" name="shipping" value="standard" checked={shippingMethod === "standard"} onChange={() => setShippingMethod("standard")} disabled={disabled} />
          <span className="ml-2">Standard — FREE</span>
        </label>

        <label className={`block p-3 border rounded ${shippingMethod === "express" ? "border-blue-300 bg-blue-50" : "border-gray-200"}`}>
          <input type="radio" name="shipping" value="express" checked={shippingMethod === "express"} onChange={() => setShippingMethod("express")} disabled={disabled} />
          <span className="ml-2">Express — $5.00</span>
        </label>
      </div>
    </section>
  );
}
