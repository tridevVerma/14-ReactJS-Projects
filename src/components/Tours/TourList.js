import React from "react";
import Tour from "./Tour";
function TourList({ toursData, removeCard }) {
  return (
    <>
      {toursData.map((tour) => {
        return <Tour key={tour.id} {...tour} removeCard={removeCard} />;
      })}
    </>
  );
}

export default TourList;
