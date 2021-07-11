import React, { useState, useEffect } from "react";

import "./tours.css";
import TourList from "./TourList";
const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [ToursData, setToursData] = useState([]);
  const [Error, setError] = useState(null);
  const [IsLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setToursData(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  const removeCard = (id) => {
    const newToursData = ToursData.filter((card) => card.id !== id);
    setToursData(newToursData);
  };

  const basicFormat = (heading) => (
    <div className="tours-bg">
      <div className="container mx-auto my-5 allTours">
        <h1 className="display-2 text-center tours-headingText">{heading}</h1>
      </div>
    </div>
  );
  if (IsLoaded === false) {
    if (Error === null) {
      return basicFormat("Loading....");
    } else {
      return basicFormat("Some Problem Occurred");
    }
  } else if (ToursData.length === 0) {
    return (
      <div className="tours-bg">
        <div className="container mx-auto my-5 allTours">
          <h1 className="display-2 text-center tours-headingText">
            No Tours Left
          </h1>
          <div className="tours-reload-btn">
            <button
              className="btn btn-outline-info mx-auto w-100"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>{" "}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="tours-bg">
      <div className="container mx-auto my-5 allTours">
        <h1 className="display-2 tours-headingText">Our Tours</h1>
        <TourList toursData={ToursData} removeCard={removeCard} />
      </div>
    </div>
  );
}

export default Tours;
