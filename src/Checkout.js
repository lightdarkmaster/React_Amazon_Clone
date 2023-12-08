import React from "react";
import "./Checkout.css";
import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2>Shopping Cart</h2>
        <span>Price</span>
        <hr />
      </div>

      <div className="checkout__right">
        <div className="item__total">
          <p>
            Subtotal (2 items): <strong>$4.94</strong>
          </p>
          <input type="checkbox" /> this order contains a gift
          <br />
          <button className="proceed_btn">Proceed to checkout</button>
        </div>

        <div className="item__suggestions">
          <h3>New international customers purchased</h3>
          <div className="pro_sug">
            <img
              src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yvkPOVPoL._AC_UL100_SR100,100_.jpg"
              alt="product1"
            />
            <span className="product__name">
              PanOxyl Antimicrobial Hydrating Acne Creamy
              <br />
              <span className="rating">⭐⭐⭐⭐ 12.5K</span>
              <br />
              <span className="price">₱ 167.25</span>
              <br />
              <button className="add_btn">Add to Cart</button>
            </span>
          </div>

          <div className="pro_sug">
            <img
              src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yvkPOVPoL._AC_UL100_SR100,100_.jpg"
              alt="product1"
            />
            <span className="product__name">
              PanOxyl Antimicrobial Hydrating Acne Creamy
              <br />
              <span className="rating">⭐⭐⭐⭐ 12.5K</span>
              <br />
              <span className="price">₱ 167.25</span>
              <br />
              <button className="add_btn">Add to Cart</button>
            </span>
          </div>

          <div className="pro_sug">
            <img
              src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yvkPOVPoL._AC_UL100_SR100,100_.jpg"
              alt="product1"
            />
            <span className="product__name">
              PanOxyl Antimicrobial Hydrating Acne Creamy
              <br />
              <span className="rating">⭐⭐⭐⭐ 12.5K</span>
              <br />
              <span className="price">₱ 167.25</span>
              <br />
              <button className="add_btn">Add to Cart</button>
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Checkout;
