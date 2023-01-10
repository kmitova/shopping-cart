import React from "react";
import { Link } from "react-router-dom";
import StoreItem from "./StoreItem";
import Buttons from "./Buttons";
import Navbar from "./Navbar";

const Cart = (props) => {
  return (
    <div className="cart">
      <Navbar cartItemsLength={props.cartItems.length} />
      <div className="cart-container">
        <h1> Your Cart:</h1>

        {props.cartItems.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          props.cartItems.map((item) => (
            <div>
              <StoreItem
                className="cart-item"
                product={item}
                key={item.id}
                increment={props.increment}
                decrement={props.decrement}
              />
              <Buttons
                product={item}
                removeFromCart={props.removeFromCart}
                buttonText={props.buttonText}
                cartItems={props.cartItems}
              />
              {/* <button
                className="remove-all-btn"
                onClick={() => props.clearCart()}
              >
                Remove all
              </button>
              <p className="total">Total: ${props.total.toFixed(1)}</p>
              <Link to="/">
                <button
                  className="checkout-btn"
                  onClick={() => props.clearCart()}
                >
                  Complete Checkout
                </button>
              </Link> */}
            </div>
          ))
        )}

        {props.cartItems.length > 0 ? (
          <div>
            {" "}
            <p className="total">Total: ${props.total.toFixed(2)}</p>
            <Link to="/">
              <button
                className="checkout-btn"
                onClick={() => props.clearCart()}
              >
                Complete Checkout
              </button>
            </Link>{" "}
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
