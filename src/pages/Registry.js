// src/pages/Registry.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Registry = () => {
  const { currentUser } = useAuth();
  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [registryItems, setRegistryItems] = useState([]);

  const handleAddItem = async (e) => {
    e.preventDefault();

    const newItem = { itemName, itemLink };
    const updatedItems = [...registryItems, newItem];

    await setDoc(doc(db, "registries", currentUser.uid), {
      items: updatedItems,
    });

    setRegistryItems(updatedItems);
    setItemName("");
    setItemLink("");
  };

  useEffect(() => {
    const fetchRegistry = async () => {
      const docRef = doc(db, "registries", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRegistryItems(docSnap.data().items || []);
      }
    };

    fetchRegistry();
  }, [currentUser.uid]);

  return (
    <div>
      <h2>Your Wedding Registry</h2>
      <form onSubmit={handleAddItem}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Item Link:</label>
          <input
            type="text"
            value={itemLink}
            onChange={(e) => setItemLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {registryItems.map((item, index) => (
          <li key={index}>
            <a href={item.itemLink} target="_blank" rel="noopener noreferrer">
              {item.itemName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registry;
