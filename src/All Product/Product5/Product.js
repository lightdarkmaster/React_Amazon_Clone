import React from 'react';
import '../Product.css';

function Product5() {
  return (

    <div className="product">
      <div className="product__info">
        <p><strong>CyberPower CP1500AVRLCD3 Intelligent LCD UPS System, 1500VA/900W,AVR, Mini Tower, Black</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>167,849.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="product5" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product5;
