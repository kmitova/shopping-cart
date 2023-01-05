import React from "react";
import Navbar from "./Navbar";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <div>
      <Navbar />
      <h1>store</h1>
      <div>
        <StoreItem />
        <StoreItem />
      </div>
    </div>
  );
};

export default Store;
