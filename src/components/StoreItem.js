import React from "react";

const StoreItem = (props) => {
  return (
    <div className="item">
      <img
        className="product-img"
        src={props.product.src}
        alt={props.product.title}
      />
      <div className="item-right-side">
        <h3>{props.product.title}</h3>
        <p className="item-price">${props.product.price}</p>
      </div>
    </div>
  );
};

export default StoreItem;
