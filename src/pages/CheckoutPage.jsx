import React, { useState } from "react";
import ContactSection from "@/components/checkout/ContactSection";
import DeliverySection from "@/components/checkout/DeliverySection";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import PaymentSection from "@/components/checkout/PaymentSection";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  // ===================================
  // User info من الـ API / Auth
  // ===================================
  const user = {
    id: "68f6486d4c11c032bbf6c44c", // userId الحقيقي
    accessToken: "YOUR_REAL_ACCESS_TOKEN" // Access token حقيقي
  };

  // ===================================
  // Local state
  // ===================================
  const [contact, setContact] = useState("");
  const [delivery, setDelivery] = useState({});
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Mock cart 
  const items = [
    { id: 1, title: "Chicken breasts", qty: 1, price: 7.99, image: "/mock1.jpg" },
    { id: 2, title: "Soda 2L", qty: 1, price: 3.5, image: "/mock2.jpg" },
  ];
  const total = items.reduce((acc, it) => acc + it.price * it.qty, 0);

  const disabled = false; // كل الحقول متاحة مباشرة

  // ===================================
  // Function: send order to API
  // ===================================
  const sendOrder = async () => {
    setLoading(true);
    setMessage("");

    const body = {
      userId: user.id,
      Contact: contact,
      Delivery: "Home Delivery",
      FirstName: delivery.firstName || "",
      LastName: delivery.lastName || "",
      Address: delivery.address || "",
      Apartment: delivery.apt || "",
      PostCode: delivery.postal || "",
      City: delivery.city || "",
      paymentMethod: "Card",
      shippingMethod,
      items: items.map(it => ({ productId: it.id, qty: it.qty }))
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/order/create-order`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${user.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (res.ok) {
        setMessage("Order created successfully!");
      } else {
        const err = await res.json();
        setMessage("Error: " + (err.message || "Failed to create order"));
      }
    } catch (err) {
      setMessage("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ===================================
  // Render
  // ===================================
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: form (2/3) */}
        <div className="lg:col-span-2">
          <ContactSection contact={contact} setContact={setContact} disabled={disabled} />
          <DeliverySection delivery={delivery} setDelivery={setDelivery} disabled={disabled} />
          <ShippingMethod shippingMethod={shippingMethod} setShippingMethod={setShippingMethod} disabled={disabled} />
          <PaymentSection paymentAvailable={true} disabled={disabled} />

          {message && <p className="mt-4 text-center">{message}</p>}

          <div className="mt-4">
            <button 
              onClick={sendOrder} 
              disabled={loading} 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {loading ? "Processing..." : "Pay now"}
            </button>
          </div>
        </div>

        {/* Right: summary */}
        <div>
          <OrderSummary items={items} total={total} />
        </div>
      </div>
    </div>
  );
}
