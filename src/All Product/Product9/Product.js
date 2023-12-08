import React from 'react';
import '../../css/Product.css';

function Product9({title, price,rating, image}) {



  return (

    <div className="product">
      <div className="product__info">
        <p><strong>{title}</strong></p>
        <p className="product__price">
            <small>Php.</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_, i) => (
             <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product9"/>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product9;
