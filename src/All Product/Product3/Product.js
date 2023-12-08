import React from 'react';
import '../../css/Product.css';
function Product3() {
  return (

    <div className="product">
      <div className="product__info">
        <p><strong>ESR for iPhone 15 Pro Case, Compatible with MagSafe,  Yellowing Resistant, Scratch-Resistant Back, Magnetic Phone Case for iPhone 15 Pro</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>589.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/71ZWgOR-RUL._AC_UY327_FMwebp_QL65_.jpg" alt="product3" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product3;
