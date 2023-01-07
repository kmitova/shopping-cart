import React from "react";

const StoreItem = (props) => {
  return (
    // STORE ITEM IS WRAPPED IN A LINK WHICH LEADS TO ITS INDIVIDUAL PAGE
    <div>
      <div>image of product</div>
      <img className="product-img" src={props.product.src} />
      <p>{props.product.alt}</p>
      <p>description</p>
      <p>price</p>
      <div>quantiy (increment or decrement)</div>
      <button onClick={() => props.addToCart(props.product)}>
        Add to cart
      </button>
      <h2>{props.product.quantity}</h2>
    </div>
  );
};

export default StoreItem;
