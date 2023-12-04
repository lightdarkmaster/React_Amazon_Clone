import React from 'react';
import '../Product.css';

function Product4() {
  return (

    <div className="product product-4">
      <div className="product__info">
        <p><strong>Refresh your space</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>2,999.00</strong>
        </p>
        <div className="product__rating">
            <p>⭐⭐⭐⭐⭐</p>

        </div>
      </div>
      <div className="picture-box">
        <div classname="pic-row">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="product1" className="boxProduct"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt ="product2" className="boxProduct"/>
        </div>
        <div classname="pic-row">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt ="product2" className="boxProduct"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt ="product2" className="boxProduct"/>
          </div>
      </div>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product4;
