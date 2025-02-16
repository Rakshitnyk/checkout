import React, { useState } from 'react';
import './CardPaymentForm.css';

const CardPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [password, setPassword] = useState('');

  const handlePayNow = () => {
    alert('Payment processed!');
  };

  return (
    <div className="card-payment-container">
      {/* Left Side - Payment Form */}
      <div className="card-payment-form">
        <div className="header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEvmbjzLu-Jtto61lD3LbthoKM-b9hzfMY5U9fnhyxCWkDNAfXJPO5KI&s"
            alt="AceCoinPay Logo"
            className="logo"
          />
        </div>

        <div className="input-group">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="2412 - 7512 - 3412 - 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>CVV Number</label>
          <input
            type="text"
            placeholder="327"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Expiry Date</label>
          <div className="expiry-date">
            <input
              type="text"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
            <span>/</span>
            <input
              type="text"
              placeholder="YY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="pay-now-button" onClick={handlePayNow}>
          Pay Now
        </button>
      </div>

      {/* Right Side - Sectioned Boxes */}
      <div className="order-summary">
        {/* Card Preview Box */}
        <div className="summary-box card-preview">
          <p><strong>Jonathan Michael</strong></p>
          <p>**** 3456</p>
          <p>Expiry: 09/22</p>
        </div>

        {/* Order Details Box */}
        <div className="summary-box order-details">
          <p><strong>Company:</strong> Apple</p>
          <p><strong>Order Number:</strong> 1266201</p>
          <p><strong>Product:</strong> MacBook Air</p>
          <p><strong>VAT (20%):</strong> $100.00</p>
        </div>

        {/* Payment Amount Box */}
        <div className="summary-box total-amount">
          <p>You have to pay</p>
          <h2>$549.99 <span>USD</span></h2>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentForm;