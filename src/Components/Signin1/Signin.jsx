import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
const Signin = () => {
  return (
    <div className="signin__container">
      <Link to={"/"}>
        <img
          className="home__link"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWs9O93Pz6uRtiiNO9fK6-RE66P2cZsq14mQ8HkZgh5jU4ag1Pjii4nlScfT_gU1S0yvY&usqp=CAU"
          alt="amazon-logo"
        />
      </Link>
      <div className="signin__form">
        <form>
          <h3>Sign-In</h3>
          <p>Email </p>
          <input type="email" />
          <button>Continue</button>
          <p>
            By continuing, you agree to
            <Link to={"/CUP"}>
              Amazon's Conditions of Use and Privacy Notice
            </Link>
            .
          </p>
          <details>
            <summary>Need help ?</summary>
            <Link to={"/"}>Forgot you password?</Link>
            <Link to={"/"}>Other issues with Sign-In!</Link>
          </details>
        </form>
      </div>
      <p>New to amazon?</p>
      <Link to={"/register"} className="create-btn">
        Create your Account
      </Link>
    </div>
  );
};

export default Signin;
