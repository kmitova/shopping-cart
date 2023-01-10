import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart-icon.png";
// src / assets / images / cart - icon.png;
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">
          <h2>
            <span className="logo-detail">Fake</span>Health
          </h2>
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-nav">
              <img className="cart-icon" src={cart} alt="cart-icon" />
              {props.cartItemsLength > 0 ? props.cartItemsLength : ""}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
