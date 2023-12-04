import React from 'react';
import '../Product.css';

function Product2() {
  return (

    <div className="product">
      <div className="product__info">
        <p><strong>AIXINI Cute Caticorn Plush Stuffed Unicorn Cat Animal Plushie 10" Soft Toy with Rainbow Wings for Girls</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>425.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/51i97BfFO2L._AC_UL480_FMwebp_QL65_.jpg" alt="product1" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product2;
