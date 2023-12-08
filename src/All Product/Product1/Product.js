import React from 'react';
import '../../css/Product.css';


function Product() {
  return (

    <div className="product product-4">
      <div className="product__info">
        <p><strong>Gaming accessories</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>4,999.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐⭐⭐</p>

        </div>
      </div>
      <div className="picture-box">
        <div classname="pic-row">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg" alt="product1" className="boxProduct"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg" alt ="product2" className="boxProduct"/>
        </div>
        <div classname="pic-row">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg" alt ="product2" className="boxProduct"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg" alt ="product2" className="boxProduct"/>
          </div>
      </div>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product;
