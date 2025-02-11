import React, { useState } from "react";
import "./menu.css";
import biscuit from "./images/Biscuit_Susu.png";
import krosang from "./images/Krosang.png";
import strawberry from "./images/Strawberry.png";
import healthy from "./images/S_Kids_Meal.png";
import mango from "./images/Mangoo_Milk.png";
import smoothie from "./images/Smoothie_Berry.png";
import rainbow from "./images/Rainbow_Cupcake.png";
import mie from "./images/Mie_Gocengan.png";
import filter from "./images/Filter.png";
import minus from "./images/Minus.png";
import plus from "./images/Plus.png";

const menuItems = [
  { id: 1, name: "Biscuit Mama with Susu", category: "Dessert", price: 60000, image: biscuit },
  { id: 2, name: "Krosang Thats It", category: "Dessert", price: 78000, image: krosang },
  { id: 3, name: "Strawberry Float", category: "Appetizer", price: 45000, image: strawberry },
  { id: 4, name: "Healthy Kids Meal", category: "Kids", price: 78000, image: healthy },
  { id: 5, name: "Mango Cereal Milk", category: "Beverages", price: 78000, image: mango },
  { id: 6, name: "Smoothie Brown Berry", category: "Beverages", price: 95000, image: smoothie },
  { id: 7, name: "Rainbow Cupcake", category: "Side Dishes", price: 78000, image: rainbow },
  { id: 8, name: "Mie Gocengan Spicy", category: "Main Course", price: 95000, image: mie },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenu = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container">
      <div className="food-heading">
        <h1>Special Discount Today</h1>
        <p>Ends in 12:10:09</p>
      </div>
      <div className="categories">
        {["All", "Main Course", "Appetizer", "Dessert", "Side Dishes", "Beverages", "Kids"].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
        <div className="filter-image">
          <div className="image">
            <img src={filter} alt="Filter Icon" />
          </div>
          <button className="filter">Filter</button>
        </div>
      </div>

      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <div className="food-order">
              <div className="food-price">
                <p>Price per portion</p>
                <h2>Rp {item.price.toLocaleString("id-ID")},00</h2>
              </div>
              <div className="order">
                <button>Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
