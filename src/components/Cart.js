import React from "react";
import { Link } from "react-router-dom";
import StoreItem from "./StoreItem";
import Navbar from "./Navbar";

const Cart = (props) => {
  return (
    <div>
      <Navbar cartItemsLength={props.cartItems.length} />
      <h1>Cart</h1>
      <h2>Items</h2>

      {props.cartItems.length === 0 ? (
        <h1>No items</h1>
      ) : (
        props.cartItems.map((item) => (
          <StoreItem
            product={item}
            key={item.id}
            increment={props.increment}
            decrement={props.decrement}
          />
        ))
      )}
      <button onClick={() => props.clearCart()}>Remove all</button>
      {/* TOTAL PRICE CHANGES IF AN ITEM IS REMOVED */}
      <p>{props.total}</p>
      <Link to="/">
        <button onClick={() => props.clearCart()}>Complete Checkout</button>
      </Link>
      <Link to="/store">
        <button>Continue shopping</button>
      </Link>
    </div>
  );
};

export default Cart;
