import React from "react";

const Buttons = (props) => {
  const { cartItems, product, addToCart, removeFromCart } = props;
  const checkId = (obj) => obj.id === product.id;
  const productAdded = cartItems.some(checkId);

  return (
    <div>
      {!productAdded ? (
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      ) : (
        <button
          className="remove-btn"
          onClick={() => removeFromCart(product.id, product)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Buttons;
