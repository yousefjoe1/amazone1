import React from "react";
import "./checkoutpro.css";
import { HiStar } from "react-icons/hi";
const CheckoutProduct = ({ removeP, title, id, price, rating, src }) => {
  const removeProduct = () => {
    removeP(id);
  };

  return (
    <div className="product-container">
      <div className="your-products">
        <div className="my-product">
          <img src={src} alt="" />
          <div className="title-pr-st">
            <p>
              {title} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore.
            </p>
            <h2>Price: ${price} </h2>
            <div className="stars">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>
                    <HiStar className="icon" />
                  </span>
                ))}
            </div>
            <button
              onClick={() => removeProduct()}
              className="remove-product-btn"
            >
              Remove this product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
