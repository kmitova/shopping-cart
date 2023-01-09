import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import data from "../assets/data";

const Store = (props) => {
  const products = data;

  return (
    <div>
      <Navbar cartItemsLength={props.cartItems.length} />
      <h1>store</h1>
      <div>
        {products.map((product) => (
          <Link
            to={`products/${product.id}`}
            key={product.id}
            product={product}
          >
            <StoreItem
              product={product}
              key={product.id}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              cartItems={props.CartItems}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
