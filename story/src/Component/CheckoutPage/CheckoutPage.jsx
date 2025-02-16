import React, { useState } from "react";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState("FedEx");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const products = [
    { id: 1, name: "New Balance 57/40 Men's Sneakers - Mindful Grey", price: 129.0, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSd8mJw0azP4Vk590MMxTMC4EIg6rZZHVDv8aIAYdFfdMn7AuZdP53pb70CSggDg5yoi3SPcnYAv_K-J6JlbHdHmnM2wDUPOVgwj8RNg8QnOmrgM7SEpu1cD1kmmarwJq7H0K_UWS0&usqp=CAc" },
    { id: 2, name: "New Balance 997H Men's Sneakers - Grey", price: 119.0, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQmeA2qRaMVwTpANZgi1tudWfNfle81YO29ErpAKAn39TySJYeWtWC90zoP4EUrF4pbIkAKZytVVkmMCeFSS2PWCDWQ7PWObscK3iTs4CgjaWKJqiK8pfSa4A" },
    { id: 3, name: "New Balance 57/40 men's Sneakers- black", price: 149.0, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRt-g1pyYh3xwnRPwnsFTMdN5XWKgPWVih3qd6tGckALC-Meq-Y3S-IlOmFZpNtRBRlrSfuyyUn2Rm_HaTPC88FL3zyO7TZK8Ad4DlXxgHQhFhDUhnu_9SlkA" },
  ];

  const handlePayment = () => {
    // Simulating payment process
    setPaymentSuccess(true);
  };

  return (
    <div>
      {/* Background Overlay */}
      <div className={styles.background}></div>

      {/* Checkout Container */}
      <div className={styles.container}>
        <h2>Order Overview</h2>

        <div>
          <h3>Summary Order</h3>
          <p>Select <strong>only one</strong> product to purchase.</p>

          <div className={styles.summary}>
            {products.map((item) => (
              <label key={item.id} className={styles.productOption}>
                <input
                  type="radio"
                  name="selectedProduct"
                  value={item.id}
                  checked={selectedItem === item.id}
                  onChange={() => {
                    setSelectedItem(item.id);
                    setPaymentSuccess(false); // Reset payment state if user changes selection
                  }}
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS084qfzMC7z-kuy_6QSoimmFI8cMqasFH7QA&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYC8F5xM7uod0o1UCiwmuxYpcA-GEht9bvA&s"
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
          <input type="email" placeholder="email" className={styles.inputField} />

          <p>Card Details</p>
          <input type="text" placeholder="Card Number" className={styles.inputField} />
          <input type="text" placeholder="MM / YY" className={styles.inputField} />
          <input type="text" placeholder="CVC" className={styles.inputField} />

          <p>Billing Address</p>
          <input type="text" placeholder="Billing Address" className={styles.inputField} />

          <h3>Total: ${selectedItem ? products.find((item) => item.id === selectedItem).price.toFixed(2) : "0.00"}</h3>

          {paymentSuccess ? (
            <div className={styles.successMessage}>Payment Successful! Thank you for your purchase.</div>
          ) : (
            <button
              className={styles.button}
              disabled={!selectedItem}
              onClick={handlePayment}
            >
              {selectedItem ? `Pay $${products.find((item) => item.id === selectedItem).price.toFixed(2)}` : "Select an item to pay"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;