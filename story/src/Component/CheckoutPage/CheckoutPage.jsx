import React, { useState } from "react";
import styles from "./CheckoutPage.module.css"; // Import CSS module

const CheckoutPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState("FedEx");

  const products = [
    { id: 1, name: "New Balance 57/40 Men's Sneakers - Mindful Grey", price: 129.00, img: "https://via.placeholder.com/50" },
    { id: 2, name: "New Balance 997H Men's Sneakers - Grey", price: 119.00, img: "https://via.placeholder.com/50" },
    { id: 3, name: "New Balance 57/40 Women's - Oyster Pink", price: 149.00, img: "https://via.placeholder.com/50" },
  ];

  return (
    <div>
      {/* Background Overlay */}
      <div className={styles.background}></div>

      {/* Checkout Container */}
      <div className={styles.container}>
        <h2>Order Overview</h2>

        <div>
          <h3>Summary Order</h3>
          <p>Select *only one* product to purchase.</p>

          <div className={styles.summary}>
            {products.map((item) => (
              <label key={item.id} className={styles.productOption}>
                <input
                  type="radio"
                  name="selectedProduct"
                  value={item.id}
                  checked={selectedItem === item.id}
                  onChange={() => setSelectedItem(item.id)}
                />
                <img src={item.img} alt={item.name} className={styles.productImage} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </label>
            ))}
          </div>

          <h3>Available Shipping Method</h3>
          <div className={styles.shippingMethods}>
            <label className={styles.shippingOption}>
              <input
                type="radio"
                name="shipping"
                value="FedEx"
                checked={selectedShipping === "FedEx"}
                onChange={() => setSelectedShipping("FedEx")}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/FedEx_Express.svg/120px-FedEx_Express.svg.png"
                alt="FedEx"
                className={styles.shippingLogo}
              />
              FedEx Delivery (Free, 2-3 days)
            </label>

            <label className={styles.shippingOption}>
              <input
                type="radio"
                name="shipping"
                value="DHL"
                checked={selectedShipping === "DHL"}
                onChange={() => setSelectedShipping("DHL")}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DHL_Express_logo.svg/120px-DHL_Express_logo.svg.png"
                alt="DHL"
                className={styles.shippingLogo}
              />
              DHL Delivery ($12, 1-3 days)
            </label>
          </div>
        </div>

        <h3>Payment Details</h3>
        <div className={styles.payment}>
          <p>Email Address</p>
          <input type="email" value="barlyvallendito@gmail.com" readOnly className={styles.inputField} />

          <p>Card Details</p>
          <input type="text" placeholder="Card Number" className={styles.inputField} />
          <input type="text" placeholder="MM / YY" className={styles.inputField} />
          <input type="text" placeholder="CVC" className={styles.inputField} />

          <p>Billing Address</p>
          <input type="text" value="7851 Garfield Ave, Huntington Beach" readOnly className={styles.inputField} />

          <h3>Total: ${selectedItem ? products.find(item => item.id === selectedItem).price.toFixed(2) : "0.00"}</h3>
          <button className={styles.button} disabled={!selectedItem}>
            <h3>Total:{selectedItem ? products.find(item => item.id === selectedItem).price.toFixed(2) : "0.00"}</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;