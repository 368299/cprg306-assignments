import { db } from "../firebase";  
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsRef = collection(db, "shoppingLists");
  const q = query(itemsRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  const items = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return items;
};

export const addItem = async (userId, newItem) => {
  const itemsRef = collection(db, "shoppingLists");

  const docRef = await addDoc(itemsRef, {
    userId: userId,
    ...newItem,
  });

  return docRef.id;
};