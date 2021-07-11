import React from "react";
import Dish from "./Dish";
function Dishes({ dishesList }) {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0rem 2rem" }}>
        <div className="row">
          {dishesList.map((dish) => {
            return (
              <div className="col-md-10 col-lg-6 mx-auto" key={dish.id}>
                <Dish dish={dish} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dishes;
