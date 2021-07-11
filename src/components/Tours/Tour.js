import React, { useState } from "react";
import "./tours.css";
function Tour(props) {
  let fewWords = props.info.split(" ").slice(0, 41).join(" ");
  const [ShowInfo, setShowInfo] = useState(fewWords);
  const [ShowBtnText, setShowBtnText] = useState("...Read More");

  const toggleShow = () => {
    if (ShowBtnText === "...Read More") {
      setShowInfo(props.info);
      setShowBtnText("...Show Less");
    } else {
      setShowInfo(fewWords);
      setShowBtnText("...Read More");
    }
  };

  const removeCard = (e) => {
    props.removeCard(props.id);
  };
  return (
    <div className="card tours-card mb-5 shadow-lg rounded">
      <img
        src={props.image}
        className="card-img-top tours-card-img-top img-fluid"
        alt="..."
      />
      <div className="card-body">
        <div className="tour-title_price">
          <h5 className="card-title">{props.name}</h5>
          <h5 style={{ color: "#3edbf0" }}>${props.price}</h5>
        </div>

        <p className="card-text">
          {ShowInfo}{" "}
          <span onClick={toggleShow} className="tour-read-more-span">
            {ShowBtnText}
          </span>
        </p>
        <div className="tour-notInterested">
          <button
            className="btn btn-outline-danger"
            onClick={(e) => removeCard(e)}
          >
            Not Interested
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Tour;
