import React from 'react';
import { FaLock, FaConciergeBell, FaDoorOpen, FaKey, FaBuilding } from 'react-icons/fa';
import './HotelGuestDashboard.css';

const HotelGuestDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="user-info">
          <img className="user-avatar" src="https://img.freepik.com/premium-photo/color-user-icon-white-background_961147-8.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="User Avatar" />
          <div>
            <p className="user-name">Joana Barros</p>
            <p className="user-role">Hotel Guest</p>
          </div>
        </div>
        <FaLock className="lock-icon" />
      </div>

      <div className="dashboard-layout">
        <div className="left-column">
          <div className="card recommended-card">
            <p className="section-title">Recommended for You</p>
            <img className="recommended-image" src="https://img.freepik.com/free-photo/tranquil-scene-sunset-water-nature-beauty-reflected-indoors-generated-by-artificial-intelligence_188544-240022.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="Spa" />
            <div className="recommended-content">
              <span className="price-badge">From $30/person</span>
              <p className="recommendation-title">Enjoy Some Me Time</p>
              <p className="recommendation-description">Relax with our massages and treatments.</p>
              <p className="facility-status">Spa facilities will close in: 4 hours</p>
            </div>
          </div>

          <div className="card popular-experiences-card">
            <p className="section-title">Popular Experiences</p>
            <div className="experiences-horizontal">
              <div className="experience-card">
                <p className="experience-title">Bike Riding</p>
                <p className="experience-subtext">Varied Tour Options</p>
              </div>
              <div className="experience-card">
                <p className="experience-title">Dinner at the Table</p>
                <p className="experience-subtext">From $30/person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="card services-card">
            <p className="section-title">All Services</p>
            <button className="service-button">
              <FaBuilding className="icon" size={36} /> Facilities
            </button>
            <button className="service-button">
              <FaKey className="icon" size={36} /> Virtual Key
            </button>
            <button className="service-button">
              <FaDoorOpen className="icon" size={36} /> My Room
            </button>
            <button className="service-button">
              <FaConciergeBell className="icon" size={36} /> Order Room Service
            </button>
          </div>

          <div className="card points-card">
            <p className="section-title">Your Points</p>
            <div className="points-badge">06 Points</div>
            <p className="points-description">
              Accumulate points with your stay. They will turn into special offers for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGuestDashboard;