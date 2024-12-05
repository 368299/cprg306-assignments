"use client";

import Item from "./item";

export default function ItemList({ items }) {
  return (
    <ul className="border p-4">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
