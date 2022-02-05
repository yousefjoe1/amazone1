import React from "react";
import "./product.css";
import { HiStar } from "react-icons/hi";

const Product = ({ func, id, title, price, src, rating }) => {
  const addtobasket = (e) => {
    let myobj = { id, title, price, src, rating };
    func(myobj);
    e.target.disabled = true;
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <div className="price">
          <strong>${price}</strong>
        </div>
        <div className="stars">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>
                <HiStar className="icon" />
              </span>
            ))}
        </div>
      </div>
      <div className="product-img">
        <img src={src} alt="a-product" />
        <button onClick={(e) => addtobasket(e)} className="add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
