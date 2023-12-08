import React from 'react';
import '../Product.css';
import { useStateValue } from "../../StateProvider";

function Product9({title, price,rating, image, id}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button  onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default Product9;
