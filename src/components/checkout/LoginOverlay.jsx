// src/components/LoginOverlay.jsx
import React from "react";
import { Button } from "@/components/ui/button";  

export default function LoginOverlay({ visible, onLogin }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg text-center">
        <h3 className="text-lg font-semibold mb-2">Please log in</h3>
        <p className="text-sm mb-4">You must be logged in to enter shipping & payment details.</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={onLogin}>Log in (mock)</Button>
        </div>
      </div>
    </div>
  );
}
