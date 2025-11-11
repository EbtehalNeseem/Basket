// src/components/ContactSection.jsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactSection({ contact, setContact, disabled }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-medium mb-3">Contact</h2>

      <div className="mb-2">
        <Label htmlFor="contactInput">Email or mobile phone number</Label>
        <Input
          id="contactInput"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or mobile phone number"
          disabled={disabled}
        />
      </div>

      <div className="flex items-center mt-2">
        <Checkbox id="subscribe" disabled={disabled} />
        <Label htmlFor="subscribe" className="ml-2">Email me with news and offers</Label>
      </div>
    </section>
  );
}
