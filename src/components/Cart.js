import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Navbar from "./Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      <h2>Items</h2>
      {/* IF CART IS EMPTY --> DISPLAY MESSAGE 'NO ITEMS ADDED' */}
      <button>Remove all</button>
      <CartItem />
      <CartItem />
      <CartItem />
      {/* TOTAL PRICE CHANGES IF AN ITEM IS REMOVED */}
      <p>total price</p>
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

// https://hygraph.com/blog/routing-in-react
