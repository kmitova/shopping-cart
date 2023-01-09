import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import Buttons from "./Buttons";
import data from "../assets/data";

const ItemPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      for (let entry of data) {
        for (const value of Object.values(entry)) {
          if (value === Number(id)) {
            setProduct(entry);
            break;
          }
        }
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Navbar cartItemsLength={props.cartItems.length} />
      <h1>Id of product: {id}</h1>
      <StoreItem
        product={product}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        buttonText={props.buttonText}
      />
      <Buttons
        product={product}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        buttonText={props.buttonText}
        cartItems={props.cartItems}
      />
    </div>
  );
};

export default ItemPage;
