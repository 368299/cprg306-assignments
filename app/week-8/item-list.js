"use client";
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });

  return (
    <div>
      <div>
        <button onClick={() => setSortBy("name")}>Sort by: Name</button>
        <button onClick={() => setSortBy("category")}>Sort by: Category</button>
      </div>
      <ul>
        {sortedItems.map((item, index) => (
          <Item key={index} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
