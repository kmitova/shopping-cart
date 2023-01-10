import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  const [buttonText, setButtonText] = useState(true);
  const [total, setTotal] = useState(0);

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  const addToCart = (product) => {
    setCartItems((cart) => [...cart, { ...product, added: true }]);
    setTotal((total) => total + product.price);
    setButtonText(!buttonText);
  };

  const removeFromCart = (index, product) => {
    setCartItems((cart) => cart.filter((product) => product.id !== index));
    setButtonText(!buttonText);
    setTotal((total) => total - product.price);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App cartItems={cartItems} />} />
        <Route path="/store" element={<Store cartItems={cartItems} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              total={total}
            />
          }
        />
        <Route
          path="/store/products/:slug"
          element={
            <ItemPage
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
              buttonText={buttonText}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
