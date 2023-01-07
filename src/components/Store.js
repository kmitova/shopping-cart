import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import data from "../assets/data";

const Store = () => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // console.log(cartItems.length);
    setCartItems((prevItems) => [...prevItems, product]);
    console.log(cartItems.length);
  };
  return (
    <div>
      <Navbar cartItemsLength={cartItems.length} />
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
              addToCart={addToCart}
            />
          </Link>
        ))}
        {/* <StoreItem />
        <StoreItem /> */}
      </div>
    </div>
  );
};

export default Store;
