import React from "react";

const Item = ({ item, onSelect }) => {
  return (
    <li
      onClick={() => onSelect(item)}
      style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
    >
      <strong>{item.name}</strong>
      <p>Buy {item.quantity} in {item.category}</p>
    </li>
  );
};

export default Item;