import React from "react";

const StoreItem = (props) => {
  const { product } = props;
  return (
    <div className="item">
      <img className="product-img" src={product.src} alt={product.title} />
      <div className="item-right-side">
        <h3>{product.title}</h3>
        <p className="item-price">${product.price}</p>
      </div>
    </div>
  );
};

export default StoreItem;
