import React from 'react';
import '../../css/Product.css';

function Product7() {
  return (

    <div className="product">
      <div className="product__info">
        <p><strong>Real Essentials 4 Pack: Men's Dry-Fit UV Moisture Wicking UPF 50+ SPF Sun Protective Fishing Hiking Swim Long Sleeve Shirt -Long Sleeves</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>985.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/917xzOZDnPL._AC_SY200_.jpg" alt="product7" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product7;
