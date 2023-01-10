import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import data from "../assets/data";

const Store = (props) => {
  const { cartItems } = props;
  const products = data;

  return (
    <div>
      <Navbar cartItemsLength={cartItems.length} />
      <div className="store">
        <h1 className="store-title">Our Products</h1>
        <div className="items-container">
          {products.map((product) => (
            <Link
              to={`products/${product.slug}`}
              key={product.id}
              product={product}
              className="store-item-product"
            >
              <img src={product.src} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="item-price">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
