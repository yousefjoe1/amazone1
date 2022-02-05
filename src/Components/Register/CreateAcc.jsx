import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./createacc.css";
const CreateAcc = () => {
  const hoverinput = useRef();
  function mouseoverinput() {
    window.onclick = (e) => {
      if (e.target.id) {
        e.target.classList.add("showborder");
      }
    };
  }
  mouseoverinput();
  return (
    <div className="create-account-container">
      <Link to={"/"}>
        <img
          className="home__link"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWs9O93Pz6uRtiiNO9fK6-RE66P2cZsq14mQ8HkZgh5jU4ag1Pjii4nlScfT_gU1S0yvY&usqp=CAU"
          alt="amazon-logo"
        />
      </Link>
      <div className="account-form-container">
        <h2>Create Account</h2>
        <form className="form">
          <label htmlFor="name">Your name</label>
          <input ref={hoverinput} type="text" name="" id="name" />
          <label htmlFor="email">Mobile number or email</label>
          <input type="text" name="" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <p>Passwords must be at least 6 characters.</p>
          <label htmlFor="passwordagain">Re-enter password</label>
          <input type="text" id="passwordagain" />
          <button>Continue</button>
          <p>
            By continuing, you agree to
            <Link to={"/CUP"}>
              Amazon's Conditions of Use and Privacy Notice
            </Link>
          </p>
          <div className="siparator">------------------------</div>
          <div className="sign-in__create">
            <p>
              Already have an account? <Link to={"/sign"}>Sign-In</Link>
            </p>
            <p>
              Buying for work?
              <Link to={"/create-free-business-account"}>
                Create a free business account?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAcc;
