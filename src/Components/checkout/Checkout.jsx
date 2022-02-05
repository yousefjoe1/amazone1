import React, { useContext } from "react";
import { TheConext } from "../../App";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import "./checkout.css";
const Checkout = (props) => {
  let basket = useContext(TheConext);

  let gettotal = basket.map((el) => {
    return el.price;
  });
  let theTotal = gettotal.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <div className="checkout-container">
      <div className="chckout">
        <section className="ckeckout-left">
          <img
            className="addv-img"
            src="https://blogs-images.forbes.com/eladnatanson/files/2019/03/amazon2-e1553774022915.png"
            alt=""
          />
          <h2>Your shopping basket</h2>
          {basket &&
            basket.map((item) => (
              <CheckoutProduct
                removeP={props.removeP}
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                src={item.src}
                rating={item.rating}
              />
            ))}
        </section>
        <section className="ckeckout-right">
          <h5>
            subtotal({basket.length} items ) :<strong> ${theTotal}</strong>
          </h5>
          <div className="gift">
            <input type={"checkbox"} id="checkbox" />
            this order contains a gift
          </div>
          <button className="procced-btn">proceed to checkout</button>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
