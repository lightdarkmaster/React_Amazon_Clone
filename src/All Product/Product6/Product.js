import React from 'react';
import '../Product.css';

function Product6() {
  return (

    <div className="product">
      <div className="product__info">
        <p><strong>Ryzen 7 7800X3D 8-Core, 16-Thread Desktop Processor</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>5,678.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_SY200_.jpg" alt="product1" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product6;
