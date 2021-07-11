import React, { useState } from "react";
import "./menu.css";
import Dishes from "./Dishes";
import data from "./data";
import MenuCategory from "./MenuCategory";
function Menu() {
  const [dishes, setDishes] = useState(data);

  const setMenuList = (type) => {
    let newList = [];
    if (type === "all") {
      newList = data;
    } else {
      newList = data.filter((dish) => {
        return dish.category === type;
      });
    }
    setDishes(newList);
  };

  return (
    <div className="menu-bg">
      <div className="container-fluid">
        <h1 className="menu-headingText">Our Menu</h1>
        <div className="menu-nav">
          <ul>
            <div className="row menu-types">
              <MenuCategory setMenu={setMenuList} />
            </div>
          </ul>
        </div>
        <Dishes dishesList={dishes} />
      </div>
    </div>
  );
}

export default Menu;
