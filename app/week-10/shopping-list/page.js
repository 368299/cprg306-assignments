"use client";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service"; // Importing the service functions

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);  
      setItems(items);  
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async () => {
    if (user && newItem.trim()) {
      const newItemObj = { name: newItem };  // Create new item object
      const itemId = await addItem(user.uid, newItemObj);  // Add to Firestore
      setItems((prevItems) => [...prevItems, { id: itemId, ...newItemObj }]);  // Update local state with new item
      setNewItem(""); 
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>  
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
