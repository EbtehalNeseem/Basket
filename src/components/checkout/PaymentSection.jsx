// src/components/PaymentSection.jsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function PaymentSection({ paymentAvailable, disabled }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-medium mb-2">Payment</h3>

      <div className="border rounded p-6 mb-4 bg-gray-50 text-center">
        {/* Placeholder for payment integration */}
        {!paymentAvailable ? (
          <p className="text-sm text-gray-600">The store can't accept payments right now.</p>
        ) : (
          <p className="text-sm text-gray-700">Payment methods will appear here.</p>
        )}
      </div>

      <div>
        <Button disabled={disabled || !paymentAvailable} className="w-full">
          Pay now
        </Button>
      </div>
    </section>
  );
}
