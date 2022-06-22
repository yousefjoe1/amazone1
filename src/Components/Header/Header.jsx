import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import "./header.css";
import { FcDown } from "react-icons/fc";
import { useState } from "react";
import { TheConext } from "../../App";

const Header = () => {
  const rightnav = useRef();
  const [navisopen, setNavisopen] = useState(true);
  const basket = useContext(TheConext);

  const openRightNav = () => {
    if (navisopen) {
      rightnav.current.classList.add("right-nav-active");
    } else {
      rightnav.current.classList.remove("right-nav-active");
    }
    setNavisopen(!navisopen);
  };

  // function opennav() {
  //   hoveropen.current.onMouseOver = () => {
  //     console.log("hover");
  //   };
  // }
  // opennav();

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://www.on5tl.com/ar/wp-content/uploads/2018/09/Amazon-start-business-activities-officially-turkey.jpg"
          alt="amazon-logo"
        />
      </Link>
      <div className="search">
        <input type="search" />

        <FcSearch className="search-icon" />
      </div>
      <button onClick={openRightNav} className="open-right-nav">
        <FcDown className="arrow-icon" />
      </button>
      <div ref={rightnav} className="right-nav">
        <div className="options option1">
          <Link to="/sign" className="options signin">
            <small>hello</small>
            <strong>Sign in</strong>
          </Link>
          <div className="signin-component">
            <div className="signinbtn-start">
              <Link to={"/sign"} className="sign-btn">
                Sign in
              </Link>
              <p className="start-link-container">
                New custmor?
                <Link className="start-link" to={"/register"}>
                  Start here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="options">
          <Link to={"/sign"} className="options">
            <small>returns</small>
            <strong>& Orders</strong>
          </Link>
        </div>

        <div className="options">
          <Link to={"/sign"} className="options">
            <small>Your</small>
            <strong>prime</strong>
          </Link>
        </div>

        <div className="options">
          <Link to={"/checkout"} className="cart">
            <small>
              <FcPaid className="cart-icon" />
            </small>
            <strong>{basket.length}</strong>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
