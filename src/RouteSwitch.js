import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/products/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
