import React from "react";

const Buttons = (props) => {
  // console.log(props.product.added);
  if (props.product.id) console.log(props.cartItems.includes(props.product));
  console.log(props.product);
  console.log(props.product.id);
  const checkId = (obj) => obj.id === props.product.id;

  console.log(props.cartItems.some(checkId));

  const productAdded = props.cartItems.some(checkId);
  console.log("product is added: " + productAdded);
  return (
    <div>
      {!productAdded ? (
        <button
          className="add-btn"
          onClick={() => props.addToCart(props.product)}
        >
          Add to Cart
        </button>
      ) : (
        <button
          className="remove-btn"
          onClick={() => props.removeFromCart(props.product.id, props.product)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Buttons;
