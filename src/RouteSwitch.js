import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(1);

  const addToCart = (product) => {
    console.log(amount);
    setCartItems((cart) => [
      ...cart,
      { ...product, added: true, quantity: amount },
    ]);
  };

  const increment = () => {
    setAmount((amount) => amount + 1);
    // setCartItems((cart) => [
    //   ...cart,
    //   { ...product, quantity: product.quantity + 1 },
    // ]);
  };

  const decrement = () => {
    setAmount((amount) => amount - 1);
  };

  // const decrement = (product) => {
  //   setCartItems((cart) => [
  //     ...cart,
  //     { ...product, quantity: product.quantity - 1 },
  //   ]);
  //   console.log(product.quantity);
  //   console.log("decreased");
  //   console.log(cartItems.length);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              increment={increment}
              decrement={decrement}
            />
          }
        />
        <Route
          path="/store/products/:id"
          element={
            <ItemPage
              addToCart={addToCart}
              cartItems={cartItems}
              increment={increment}
              decrement={decrement}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
