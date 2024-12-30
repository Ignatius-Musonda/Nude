import React from "react";
import "./StatsAndAwards.css"; // Make sure to create this CSS file
import { FaHandsHelping, FaRecycle, FaTrophy, FaUsers } from "react-icons/fa"; // Optional: Icons for extra visual appeal

const StatsAndAwards = () => {
  return (
    <div className="stats-and-awards-container">
      <h2 className="section-title">Our Impact & Achievements</h2>

      <div className="stats-container">
        {/* Card 1 - People Employed */}
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3 className="stat-title">Over 2,000 Artisans</h3>
          <p className="stat-description">
            Empowering local communities by providing fair wages and sustainable work opportunities.
          </p>
        </div>

        {/* Card 2 - Shoes Made */}
        <div className="stat-card">
          <FaHandsHelping className="stat-icon" />
          <h3 className="stat-title">1 Million+ Shoes Sold</h3>
          <p className="stat-description">
            Handcrafted footwear loved by people worldwide, combining style, comfort, and sustainability.
          </p>
        </div>

        {/* Card 3 - Environmental Impact */}
        <div className="stat-card">
          <FaRecycle className="stat-icon" />
          <h3 className="stat-title">100 Tons of Waste Recycled</h3>
          <p className="stat-description">
            We repurpose upcycled materials into footwear, helping to reduce environmental waste.
          </p>
        </div>

        {/* Card 4 - Industry Awards */}
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <h3 className="stat-title">Multiple Industry Awards</h3>
          <p className="stat-description">
            Recognized globally for excellence in craftsmanship, innovation, and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsAndAwards;
