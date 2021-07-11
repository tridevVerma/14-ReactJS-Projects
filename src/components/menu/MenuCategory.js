import React from "react";

function MenuCategory({ setMenu }) {
  const menuCategory = ["all", "breakfast", "lunch", "shakes"];
  return (
    <>
      {menuCategory.map((category, index) => {
        return (
          <li className="menu-li col-md-3 col-lg-3 col-6" key={index}>
            <button
              className="menu-btn text-capitalize"
              onClick={() => setMenu(category)}
            >
              {category}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default MenuCategory;
