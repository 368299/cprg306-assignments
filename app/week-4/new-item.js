"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-lg font-bold mb-4">Adjust Quantity</h2>
      <div className="mb-4 text-2xl">{quantity}</div>

      <div className="flex gap-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'}`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
        >
          +
        </button>
      </div>
    </div>
  );
}