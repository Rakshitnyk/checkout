
import React from "react";
import "./foodslice.css";
import vegetableburger from "./images/vegetable burger.png";
import meatburger from "./images/meat burger.png";
import cheeseburger from "./images/cheese burger.png";
import bird from "./images/bird.png";
import paypal from "./images/paypal.png";
import hdfc from "./images/hdfc.png";
import visa from "./images/visa.png";

const foodslice = () => {
  return (
    <div className="bottom-right-container">
      <div className="sub-heading">Invoice</div>
      <div className="coloum-contants">
        <div className="coloum-contant">
          <img src={vegetableburger} alt="" />
          <div className="side-info">
            <div className="sub-heading">Vegetable Burger</div>
            <div className="price-heading">
              <a href="">$25</a>
            </div>
          </div>
        </div>
        <div className="coloum-contant">
          <img src={meatburger} alt="" />
          <div className="side-info">
            <div className="sub-heading">Meat Burger</div>
            <div className="price-heading">
              <a href="">$28</a>
            </div>
          </div>
        </div>
        <div className="coloum-contant">
          <img src={cheeseburger} alt="" />
          <div className="side-info">
            <div className="sub-heading">Cheese Burger</div>
            <div className="price-heading">
              <a href="">$32</a>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-container">
        <div className="payment-heading">Payment Summary</div>
        <div className="sub-total">
          <div className="payment-name">Sub Total</div>
          <div className="payment-price">$85</div>
        </div>
        <div className="sub-total">
          <div className="payment-name">Tax</div>
          <div className="payment-price">-$6</div>
        </div>
        <div className="payment-sub-heading">
          <div className="payment-name">Total Payment</div>
          <div className="payment-price">$79</div>
        </div>
        <div className="payment-method">Payment Method</div>
        <div className="payment-Images">
          <div className="img-row">
            <img src={bird} alt="" />
            <img src={paypal} alt="" />
          </div>
          <div className="img-row">
            <img src={hdfc} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
      <div className="payment-button">
        <button>Place an Order Now</button>
      </div>
    </div>
  );
};

export default foodslice;

