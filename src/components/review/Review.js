import React, { useState, useEffect } from "react";
import "./review.css";
import data from "./data";

function Review() {
  const [count, setcount] = useState(0);
  const [person, setperson] = useState(data[0]);

  const checkNumber = (num) => {
    if (num > data.length - 1) {
      return 0;
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  };
  const previous = () => {
    let newCount = count - 1;
    setcount(checkNumber(newCount));
  };

  const next = () => {
    let newCount = count + 1;
    setcount(checkNumber(newCount));
  };

  const random = () => {
    let num = Math.floor(Math.random() * data.length);
    setcount(num);
  };

  useEffect(() => {
    setperson(data[count]);
  }, [count]);

  return (
    <div className="review-bg">
      <div className="container">
        <h1 className="text-capitalize review-headingText display-2">
          our review
        </h1>
        <div className="review-card shadow-lg">
          <div className="review-img-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-quote-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
            </svg>
            <img src={person.image} className="review-img" alt="person" />
          </div>
          <h4 className="review-name text-capitalize">{person.name}</h4>
          <h4 className="review-role text-uppercase">{person.job}</h4>
          <p className="review-about text-center">{person.text}</p>
          <div className="review-btns">
            <button className="review-left" onClick={() => previous()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>{" "}
            </button>
            <button className="review-right" onClick={() => next()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <button
            className="btn review-btn btn-outline-info"
            onClick={() => random()}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
