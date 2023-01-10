import React from "react";

const Description = (props) => {
  const { product } = props;
  return <p className="item-description">{product.description}</p>;
};

export default Description;
