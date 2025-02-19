import React from 'react';
import './HotelCard.css'; // For styling the design

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-card__image">
        <img
          src="https://img.freepik.com/premium-photo/vibrant-photo-moonlit-oasis_1179130-271714.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid"
          alt="Hotel Room"
        />
      </div>

      <div className="hotel-card__content">
        <h2>Hotel Dark Moon</h2>
        <p className="hotel-card__location">Paris, France</p>

        <div className="hotel-card__price-rating">
          <span className="hotel-card__price">$390/night</span>
          <span className="hotel-card__rating">⭐ 4.9 (6.5k reviews)</span>
        </div>

        <p className="hotel-card__description">
          Hotel Dark Moon, 100 metres from Front Beach, Bai L Motel Vung Tau
          offers accommodation with a garden, private parking and a shared...
        </p>

        <div className="hotel-card__offers">
          <div>🛏 2 Bed</div>
          <div>🍽 Dinner</div>
          <div>🛁 Hot Tub</div>
          <div>❄ AC</div>
        </div>

        <button className="hotel-card__button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;