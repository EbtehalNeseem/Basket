// src/components/OrderSummary.jsx
import React from "react";

export default function OrderSummary({ items = [], total = 0 }) {
  return (
    <aside className="p-4 border-l">
      <h3 className="text-lg font-medium mb-4">Order summary</h3>

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={it.image} alt={it.title} className="w-12 h-12 object-cover rounded" />
              <div>
                <div className="text-sm">{it.title}</div>
                <div className="text-xs text-gray-500">Qty {it.qty}</div>
              </div>
            </div>
            <div className="text-sm font-medium">${(it.price * it.qty).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-sm text-gray-600">Subtotal</div>
        <div className="flex justify-between mt-2 font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </aside>
  );
}
