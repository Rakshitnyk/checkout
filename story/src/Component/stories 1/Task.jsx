import React, { useState } from "react";
import "./Task.css";
import heart from "./images/heart.jpg";
import orange from "./images/Like-orange.png";
import location from "./images/location.png";
import whatsapp from "./images/whatsapp.png";
import share from "./images/share.png";
import thunderboult from "./images/thunderbolt.png";
import menu from "./images/menu.png";

const carImages = [
  "https://images10.gaadi.com/usedcar_image/4320910/original/10e495689e38c63ed57b8bc8a0a08fee.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/2576637a8940cdad3c87c57f64dbfe32.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/7e22d2a745f023d31cf1c79ecbd81924.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/1d0e7a56f0ee267546ee430089c711fa.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/93a7ae7062fdd0b1618bc5d5feca6423.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/99219699e6edf84def34785989357399.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/ef9fbdad4594456520593e9eb7809fd8.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/dbe0deb27e9e4024c583e79a233e5637.JPG?imwidth=640",
];

export default function Task() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length
    );
  };

  return (
    <div className="outer">
      {/* Left Side (Car Image with Navigation) */}
      <div className="inner1">
        <button className="prev-btn" onClick={prevImage}>
          &#10094;
        </button>
        <img src={carImages[currentIndex]} alt="Car" className="car-image" />

        <span className="bottom-icon">
          <img
            src="https://stimg.cardekho.com/usedcar/images/logos/Spinny_LogoDark1.svg"
            alt=""
          />
        </span>
        <div className="Car-menu-img">
          <img src={menu} alt="" />
          <p> 40 PHOTOS</p>
        </div>

        <button className="next-btn" onClick={nextImage}>
          &#10095;
        </button>
      </div>

      {/* Right Side (Static Car Details) */}
      <div className="inner2">
        <div className="top">
          <div className="inner2-1">
            <div className="in1">
              <h2>2023 Maruti Alto K10 VXI Plus</h2>
              <button>CERTIFIED</button>

              <img
                src={isFavorited ? orange : heart}
                alt="Favorite"
                className={`heart-icon ${isFavorited ? "favorited" : ""}`}
                onClick={toggleFavorite}
              />
            </div>

            <div className="in2">
              <span>5,846 kms</span>
              <ul>
                <li>Petrol</li>
                <li>Manual</li>
                <li>1st Owner</li>
              </ul>
            </div>

            <div className="in3">
              <h2>$5.21 Lakh</h2>
              <a href="#">EMI starts @ $12,932/mo</a>
            </div>
            <div className="in4">
              <div className="in4-1">
                <img src={location} alt="Location" />
                <p>Yelahanka, Bangalore</p>
                <input type="checkbox" /> Compare
              </div>
              <button>View Seller Details</button>
            </div>
          </div>
          <div className="inner2-2">
            <div className="thunder-icon">
              <img src={thunderboult} alt="" />
            </div>
            <h3>Trending Car!</h3>
            <p>High chances of sale in next 6 days</p>
          </div>
        </div>
        <div className="bottom">
          <div className="app-icon">
            <img src={whatsapp} alt="" />
            <div className="app-des">
              <a href="">Chat with Seller</a>
            </div>
          </div>

          <div className="app-icon">
            <img src={share} alt="" />
            <div className="app-des">
              <a href="">Share</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
