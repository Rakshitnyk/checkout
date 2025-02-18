import React from 'react';
import './HotelGuestDashboard.css'; // Optional, if you want custom styles

const HotelGuestDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <p className="user-name">Joana Barros</p>
        <p className="user-role">Hotel Guest</p>
      </div>

      <div className="recommendation">
        <p className="recommendation-title">Recommended for you</p>
        <div className="recommendation-card">
          <p className="recommendation-text">Enjoy some me time</p>
          <p className="recommendation-subtext">Relax with our massages and treatments.</p>
        </div>
      </div>

      <div className="popular-experiences">
        <p className="section-title">Popular experiences</p>
        <div className="experience-card">Bike Riding</div>
        <div className="experience-card">Dinner at the Table</div>
      </div>

      <div className="services">
        <p className="section-title">All services</p>
        <button className="service-button">Facilities</button>
        <button className="service-button">Virtual Key</button>
        <button className="service-button">My Room</button>
        <button className="service-button">Order Room Service</button>
      </div>

      <div className="points-section">
        <p>06 points</p>
        <p>Accumulate points with your stay. They will turn into special offers for you.</p>
      </div>
    </div>
  );
};

export default HotelGuestDashboard;