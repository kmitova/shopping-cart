import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          {/* LOGO HERE */}
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart {props.cartItemsLength}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
