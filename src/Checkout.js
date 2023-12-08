import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2>Shopping Cart</h2>
        <span>Price</span>
        <hr />
        <div className="product__checkout">
          <div className="product__image">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YsO5v5PuL._AC_AA180_.jpg"
              alt=""
            />
          </div>
          <div className="product__info">
            <p className="checkout__product__name">
              Munchkin® White Hot® Safety Bath Ducky Toy, Yellow
            </p>
            <p className="stock">In Stock</p>
            <p className="product__description">
              Eligible for FREE Shipping & FREE Returns
            </p>
            <p className="product__description">
              <input type="checkbox" /> This is a gift{" "}
              <a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fschylling.com%2Fwp-content%2Fuploads%2F2020%2F08%2FRDKY-Classic-Yellow-Rubber-Duck_web.jpg&f=1&nofb=1&ipt=aeed7a128f435dd9b62b545fac85cb65dd8b485c137177ad9bbdeecf7a15f92c&ipo=images">
                Learn more
              </a>
            </p>
            <p className="product__description">
              <strong>Color:</strong> Bath Ducky
            </p>
          </div>
          <div className="total__price">
            <strong> ₱167.89</strong>
          </div>
        </div>

        <hr />
        <div className="product__subtotal">
          <p className="sub__total">
            Subtotal (1 item): <strong>₱167.89</strong>
          </p>
        </div>
      </div>

      <div className="checkout__right">
        <div className="item__total">
          <p>
            Subtotal (2 items): <strong>₱167.94</strong>
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
