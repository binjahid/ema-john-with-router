import React from "react";

const ReviewProducts = (props) => {
  const { name, price, quantity, key } = props.product;
  return (
    <div className="product">
      <div>
        <h2 className="product-name">{name}</h2>
        <h3>Price : {price}</h3>
        <h3>Quantity : {quantity}</h3>
        <button onClick={() => props.handleRemove(key)} className="btn-regular">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewProducts;
