import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";
import data from "../assets/data";

const ItemPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      for (let entry of data) {
        for (const value of Object.values(entry)) {
          if (value === Number(id)) {
            console.log(value);
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
      <Navbar />
      <h1>Id of product: {id}</h1>
      <StoreItem product={product} />
    </div>
  );
};

export default ItemPage;
