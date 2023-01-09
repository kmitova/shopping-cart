import React, { useState } from "react";

const StoreItem = (props) => {
  console.log(props.product);
  console.log(props.product.added);
  const isAdded = props.product.added;

  // const [buttonText, setButtonText] = useState(true);
  console.log(isAdded);
  return (
    // STORE ITEM IS WRAPPED IN A LINK WHICH LEADS TO ITS INDIVIDUAL PAGE

    <div>
      <div>image of product</div>
      <img
        className="product-img"
        src={props.product.src}
        alt={props.product.title}
      />
      <p>{props.product.alt}</p>
      <p>description</p>
      <p>{props.product.price}</p>
      {/* {props.buttonText ? (
        <button onClick={() => props.addToCart(props.product)}>
          Add to Cart
        </button>
      ) : (
        <button onClick={() => props.removeFromCart(props.product.id)}>
          Remove
        </button>
      )} */}
    </div>
  );
};

export default StoreItem;
