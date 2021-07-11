import React from "react";
function Dish({ dish }) {
  return (
    <div className="card menu-dish">
      <div className="row">
        <div className="col-sm-4">
          <img src={dish.img} alt="dish" className="img-fluid menu-dish-img" />
        </div>
        <div className="col-sm-8">
          <div className="menu-card-body">
            <div className="menu-title-price">
              <h5 className="menu-card-title text-capitalize">{dish.title}</h5>
              <h5 className="menu-card-price">${dish.price}</h5>
            </div>

            <hr className="menu-hr" />
            <p className="menu-card-text">{dish.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
