import React from 'react';
import '../../css/Product.css';

function Product8() {
  return (

    <div className="product">
      <div className="product__info oneproduct">
        <p><strong>49" Odyssey Neo G9 Series G95NA 4K UHD Curved Gaming Monitor, 240Hz, 1ms, Mini LED Display, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black ,Samsung Ultrawide Monitor</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>259,899.00</strong>
        </p>
        <div className="product__rating oneproduct">
            <p>⭐⭐⭐⭐</p>

        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX300_SY300_.jpg" className="monitor" alt="product1"/>

     <a href="https://www.amazon.com/SAMSUNG-Odyssey-Monitor-FreeSync-LS49AG952NNXZA/dp/B096YNP6ZR/ref=sr_1_2?keywords=samsung%2Bodyssey%2Bg9&sr=8-2&th=1" className="link"> Learn More</a>
    </div>
  )
}

export default Product8;
