import React from "react";
import { Link } from "react-router-dom";
import StoreItem from "./StoreItem";
import Buttons from "./Buttons";
import Navbar from "./Navbar";

const Cart = (props) => {
  const { cartItems, removeFromCart, buttonText, total, clearCart } = props;
  return (
    <div className="cart">
      <Navbar cartItemsLength={cartItems.length} />
      <div className="cart-container">
        <h1> Your Cart:</h1>
        {cartItems.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          cartItems.map((item) => (
            <div className="items-in-cart">
              <StoreItem className="cart-item" product={item} key={item.id} />
              <Buttons
                product={item}
                removeFromCart={removeFromCart}
                buttonText={buttonText}
                cartItems={cartItems}
              />
            </div>
          ))
        )}

        {cartItems.length > 0 ? (
          <div>
            <p className="total">Total: ${total.toFixed(2)}</p>
            <Link to="/">
              <button className="checkout-btn" onClick={() => clearCart()}>
                Complete Checkout
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <Link to="/store">
          <button className="continue-btn">Continue shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
