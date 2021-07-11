import React, { useState, useEffect, useCallback } from "react";
import "./slider.css";
import data from "./data";
function Slider() {
  const [slide, setslide] = useState(0);

  const previous = () => {
    const newSlide = checkUser(slide - 1);
    setslide(newSlide);
  };

  const next = useCallback(() => {
    const newSlide = checkUser(slide + 1);
    setslide(newSlide);
  }, [slide]);

  const checkUser = (num) => {
    if (num < 0) {
      return data.length - 1;
    }
    if (num > data.length - 1) {
      return 0;
    }
    return num;
  };

  useEffect(() => {
    let num = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(num);
  }, [next]);

  return (
    <div className="slider-bg">
      <div className="container slider">
        <h1 className="slider-headingText text-capitalize text-center">
          <span className="slider-heading-slash">/</span> Reviews
          <div className="row container slider-box">
            <div className="col-md-1 col-lg-1 col-6 mx-auto order-md-0 order-1 d-flex justify-content-center">
              <button className="slider-left-btn" onClick={() => previous()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                </svg>
              </button>
            </div>
            <div className="col-md-10 col-lg-10 col-10 mx-auto order-md-1 order-0">
              <div className="slider-content">
                <div className="slider-imageInfo-div">
                  <img
                    src={data[slide].image}
                    alt="person"
                    className="slider-image img-fluid"
                  />
                  <h6 className="text-uppercase text-center slider-person-name">
                    {data[slide].name}
                  </h6>
                  <h6 className="text-capitalize text-center person-title">
                    {data[slide].title}
                  </h6>
                  <p className="text-center slider-person-quote">
                    {data[slide].quote}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1 col-lg-1 col-6 mx-auto order-md-2 order-2 d-flex justify-content-center">
              <button className="slider-right-btn" onClick={() => next()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                </svg>
              </button>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Slider;
