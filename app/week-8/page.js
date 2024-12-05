"use client";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (name, quantity, category) => {
    setItems([...items, { name, quantity, category }]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanName);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Shopping List</h1>
        <NewItem onAdd={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

const NewItem = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAdd(name, quantity, category);
      setName("");
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
      <input type="number" value={quantity} readOnly />
      <button type="button" onClick={() => setQuantity(Math.min(20, quantity + 1))}>+</button>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Produce</option>
        <option>Meat</option>
        <option>Dairy</option>
        <option>Bakery</option>
        <option>Household</option>
      </select>
      <button type="submit">+</button>
    </form>
  );
};
