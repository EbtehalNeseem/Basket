import React from "react"

export default function OrderItem({ item }) {
    return (
        <div
            className="flex justify-between items-center border-b pb-2"
            key={item.id}
        >
            <div className="relative border border-[--border-primary] rounded w-16 h-16 flex items-center justify-center overflow-hidden">
                <img
                    src={item.Image?.url}
                    alt={item.name}
                    className="object-cover w-full h-full"
                />
                {item.quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#35afa0] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {item.quantity}
              </span>
            )}
            </div>

            <div className="flex-1 flex flex-col items-start px-2">
                <span className="font-medium">{item.name || "No name"}</span>
                <span className="text-sm text-gray-500">${item.price}</span>
            </div>


        </div>

    );
}
