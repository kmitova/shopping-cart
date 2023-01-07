import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((cart) => [...cart, { ...product, added: true }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} addToCart={addToCart} />}
        />
        <Route
          path="/store/products/:id"
          element={<ItemPage addToCart={addToCart} cartItems={cartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
