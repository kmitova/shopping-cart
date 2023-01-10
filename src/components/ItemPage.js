import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import Buttons from "./Buttons";
import data from "../assets/data";
import Description from "./Description";

const ItemPage = (props) => {
  const { slug } = useParams();
  console.log(useParams());
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      for (let entry of data) {
        console.log(entry);
        for (const value of Object.values(entry)) {
          console.log(value);
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
      <Navbar cartItemsLength={props.cartItems.length} />
      <div className="item-container">
        <div className="left-side">
          <StoreItem
            product={product}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            buttonText={props.buttonText}
          />
        </div>
        <div className="right-side">
          <Description product={product} />
          <Buttons
            product={product}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            buttonText={props.buttonText}
            cartItems={props.cartItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
