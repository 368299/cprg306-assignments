"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState(""); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState("produce"); 

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newItem = { name, quantity, category };

    console.log("Item Added:", newItem);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />

        {/* Quantity Field */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`w-10 h-10 flex justify-center items-center rounded-full ${
              quantity === 1 ? "bg-gray-700 text-gray-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`w-10 h-10 flex justify-center items-center rounded-full ${
              quantity === 20 ? "bg-gray-700 text-gray-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            +
          </button>
        </div>

        {/* Category Field */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
