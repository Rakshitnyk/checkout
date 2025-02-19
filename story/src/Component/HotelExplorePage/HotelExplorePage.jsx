import React from 'react';
import './HotelExplorePage.css';

const HotelExplorePage = () => {
  return (
    <div className="hotel-explore-page">
      <header className="header">
        <h1>Let's <br />Explore Hotels</h1>
        <button className="search-icon">🔍</button>
      </header>

      <nav className="nav-tabs">
        <button className="active">Hotel</button>
        <button>Flight</button>
        <button>Place</button>
        <button>Food</button>
      </nav>

      <section className="popular-hotels">
        <h2>Popular Hotels <span className="see-all">See all</span></h2>
        <div className="popular-card">
          <img src="https://img.freepik.com/premium-photo/photograph-interior-modern-house_853677-304323.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="Hotel Royal Blue" />
          <div className="popular-info">
            <h3>Hotel Royal Blue</h3>
            <p>Zurich, Switzerland</p>
            <p className="price">$480/night <span className="rating">⭐ 4.9 (6.8K)</span></p>
          </div>
        </div>
      </section>

      <section className="low-cost-hotels">
        <h2>Low Cost Hotels</h2>
        <div className="low-card">
          <img src="https://img.freepik.com/free-psd/classic-ballroom-award-ceremony-generative-ai_587448-2237.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="Warwick Grand Hotel" />
          <div className="low-info">
            <h3>Warwick Grand Hotel</h3>
            <p>New York</p>
            <p>$480/night</p>
          </div>
        </div>

        <div className="low-card">
          <img src="https://img.freepik.com/free-photo/beautiful-city_1127-3332.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="Water Garden Inn" />
          <div className="low-info">
            <h3>Water Garden Inn</h3>
            <p>London</p>
            <p>$300/night</p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav">
        <button>🏠</button>
        <button>❤</button>
        <button>🔔</button>
        <button>💬</button>
        <button>👤</button>
      </nav>
    </div>
  );
};

export default HotelExplorePage;