// src/pages/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Ensure the CSS is imported

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="overlay">
          <h1>Celebrating milestones with heartfelt gifts</h1>
          <p>Add the gifts you want from the pinnacle mall</p>
          <Link to="/signup">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <h2>Wedding Registry</h2>
          <p>Showcase your love story with photos, videos, and more.</p>
        </div>
        <div className="feature">
          <h2>Birthday Registry</h2>
          <p>Set up a registry for your guests to purchase gifts and donate.</p>
        </div>
        <div className="feature">
          <h2>Baby Arrival</h2>
          <p>Organize and manage your wedding guests with ease.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Wedding Bliss. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
