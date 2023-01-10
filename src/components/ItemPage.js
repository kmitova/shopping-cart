import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import Buttons from "./Buttons";
import data from "../assets/data";
import Description from "./Description";

const ItemPage = (props) => {
  const { cartItems, addToCart, removeFromCart, buttonText } = props;
  const { slug } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      for (let entry of data) {
        for (const value of Object.values(entry)) {
          if (value === slug) {
            setProduct(entry);
          }
        }
      }
    };
    fetchProduct();
  }, [slug]);

  return (
    <div>
      <Navbar cartItemsLength={cartItems.length} />
      <div className="item-container">
        <div className="left-side">
          <StoreItem product={product} />
        </div>
        <div className="right-side">
          <Description product={product} />
          <Buttons
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            buttonText={buttonText}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
