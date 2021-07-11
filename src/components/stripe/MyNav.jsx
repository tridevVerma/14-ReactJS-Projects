import React from "react";
import "./stripe.css";
import logo from "../stripe/images/logo.svg";
import { FaAlignJustify } from "react-icons/fa";
function MyNav() {
  const toggle = () => {
    const ul = document.getElementsByClassName("stripe-submenu-container");
    const hero = document.getElementsByClassName("stripe-hero");
    const nav = document.getElementsByClassName("stripe-my-nav");
    hero[0].style.display = "none";
    nav[0].style.display = "none";
    ul[0].classList.toggle("stripe-show");
  };
  return (
    <div className="stripe-my-nav">
      <div className="container">
        <div className="row">
          <div className="stripe-logo col-md-2 col-lg-2 col-6 p-0">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-8 col-0 stripe-my-nav-links">
            <ul className="links p-0 mx-auto h-100 d-flex align-items-center justify-content-around">
              <li>Product</li>
              <li>Developer</li>
              <li>Company</li>
            </ul>
          </div>
          <div className="col-md-2 col-lg-2 col-0 stripe-sign-in">
            <button className="btn btn-dark">Sign In</button>
          </div>
          <div className="col-6 stripe-toggle-nav">
            <button
              className="stripe-toggle-btn d-flex border-0 bg-transparent"
              onClick={() => toggle()}
            >
              <FaAlignJustify className="toggle-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNav;
