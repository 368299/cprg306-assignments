"use client";

export default function Item({ item }) {
  return (
    <li className="border-b py-2">
      <span className="font-bold">{item.name}</span> - {item.quantity}{" "}
      <span className="italic text-gray-500">({item.category})</span>
    </li>
  );
}
