import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
      <h2>Items</h2>
      <p>price</p>
      <Link to="/">
        <button>Complete Checkout</button>
      </Link>
      <Link to="/store">
        <button>Continue shopping</button>
      </Link>
    </div>
  );
};

export default Cart;
