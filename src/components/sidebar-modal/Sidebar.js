import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
function Sidebar({ toggle }) {
  return (
    <div className="sidebar">
      <div className="sidebar-toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-justify sidebar-bi-justify"
          viewBox="0 0 16 16"
          onClick={() => toggle()}
        >
          <path
            fillRule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="sidebar-content sidebar-hide-width">
        <div className="sidebar-header d-flex justify-content-between">
          <div className="sidebar-heading">
            <h2>
              Coding <span className="sidebar-brand-style">Addict</span>
            </h2>
          </div>
          <div className="sidebar-close-sidebar">
            <button className="sidebar-close-modal" onClick={() => toggle()}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="sidebar-links mt-5">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {icon}
                    <span className="mx-4">{text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-social-links">
          <ul className="social-links">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
