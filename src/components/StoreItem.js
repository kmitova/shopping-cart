import React, { useState } from "react";
import { Link } from "react-router-dom";

const StoreItem = (props) => {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = () => {
  //   setCartItems(...prevItems, )
  // }
  return (
    // STORE ITEM IS WRAPPED IN A LINK WHICH LEADS TO ITS INDIVIDUAL PAGE

    // <Link to={`products/${props.product.id}`}>
    <div>
      <div>image of product</div>
      <img className="product-img" src={props.product.src} />
      <p>{props.product.alt}</p>
      <p>description</p>
      <p>price</p>
      <div>quantiy (increment or decrement)</div>
      <button onClick={props.addToCart}>Add to cart</button>
    </div>
    // </Link>
  );
};

export default StoreItem;
