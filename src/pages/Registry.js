// src/pages/Registry.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Navigation from "../components/Navigation"; // Import the Navigation component
import "./Registry.css"; // Import the CSS file for styling

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
    <div className="registry-page">
      <Navigation /> {/* Add the navigation */}
      <div className="registry-container">
        <h2>Your Wedding Registry</h2>
        <form onSubmit={handleAddItem} className="registry-form">
          <div className="form-group">
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Item Link:</label>
            <input
              type="text"
              value={itemLink}
              onChange={(e) => setItemLink(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="add-item-button">
            Add Item
          </button>
        </form>

        <ul className="registry-list">
          {registryItems.map((item, index) => (
            <li key={index} className="registry-item">
              <a href={item.itemLink} target="_blank" rel="noopener noreferrer">
                {item.itemName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Registry;
