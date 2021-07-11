import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data.js";
function Submenu() {
  const closeSubmenu = () => {
    const ul = document.getElementsByClassName("stripe-submenu-container");
    const hero = document.getElementsByClassName("stripe-hero");
    const nav = document.getElementsByClassName("stripe-my-nav");
    hero[0].style.display = "block";
    nav[0].style.display = "block";
    ul[0].classList.toggle("stripe-show");
  };
  return (
    <div className="stripe-submenu-container">
      <div className="stripe-sub-menu">
        <div className="stripe-close-submenu">
          <button
            className="stripe-close-submenu-btn"
            onClick={() => closeSubmenu()}
          >
            <FaTimes />
          </button>
        </div>
        <div className="stripe-submenu-items my-5">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <div className="my-5" key={index}>
                <h5 className="text-capitalize fw-bold my-3 stripe-submenu-link-heading">
                  {page}
                </h5>
                <div className="stripe-links-container">
                  {links.map((link) => {
                    const { label, icon, url } = link;
                    return (
                      <a
                        href={url}
                        className="stripe-submenu-links text-capitalize"
                        key={"" + label}
                      >
                        {icon}
                        <span className="stripe-submenu-label">{label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Submenu;
