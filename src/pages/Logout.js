// src/pages/Logout.js
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation"; // Import the Navigation component
import "./Logout.css";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigate("/login"); // Redirect to the login page after logout
    };
    performLogout();
  }, [logout, navigate]);

  return (
    <div className="logout-page">
      <Navigation /> {/* Add the navigation */}
      <div className="logout-container">
        <h2>You have been logged out.</h2>
        <p>Redirecting to the login page...</p>
      </div>
    </div>
  );
};

export default Logout;
