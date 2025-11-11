// src/components/DeliverySection.jsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DeliverySection({ delivery, setDelivery, disabled }) {
  const update = (field, value) => setDelivery({ ...delivery, [field]: value });

  return (
    <section className="mb-6">
      <h2 className="text-xl font-medium mb-3">Delivery</h2>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <Label>First name (optional)</Label>
          <Input value={delivery.firstName || ""} onChange={(e) => update("firstName", e.target.value)} disabled={disabled} />
        </div>
        <div>
          <Label>Last name</Label>
          <Input value={delivery.lastName || ""} onChange={(e) => update("lastName", e.target.value)} disabled={disabled} />
        </div>
      </div>

      <div className="mb-2">
        <Label>Address</Label>
        <Input value={delivery.address || ""} onChange={(e) => update("address", e.target.value)} disabled={disabled} />
      </div>

      <div className="mb-2">
        <Label>Apartment, suite, etc. (optional)</Label>
        <Input value={delivery.apt || ""} onChange={(e) => update("apt", e.target.value)} disabled={disabled} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label>Postal code (optional)</Label>
          <Input value={delivery.postal || ""} onChange={(e) => update("postal", e.target.value)} disabled={disabled} />
        </div>
        <div>
          <Label>City</Label>
          <Input value={delivery.city || ""} onChange={(e) => update("city", e.target.value)} disabled={disabled} />
        </div>
      </div>
    </section>
  );
}
