"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block font-bold">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          max="20"
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Item
      </button>
    </form>
  );
}
