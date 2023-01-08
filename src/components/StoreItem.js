import React from "react";

const StoreItem = (props) => {
  // const [amount, setAmount] = useState(1);

  return (
    // STORE ITEM IS WRAPPED IN A LINK WHICH LEADS TO ITS INDIVIDUAL PAGE

    <div>
      <div>image of product</div>
      <img
        className="product-img"
        src={props.product.src}
        alt={props.product.title}
      />
      <p>{props.product.alt}</p>
      <p>description</p>
      <p>price</p>
      <p>{props.product.quantity}</p>
      <div>
        <button onClick={() => props.decrement(props.product)}>Decrease</button>
        <button onClick={() => props.increment()}>Increase</button>
      </div>
      <button onClick={() => props.addToCart(props.product)}>
        Add to cart
      </button>
    </div>
  );
};

export default StoreItem;
