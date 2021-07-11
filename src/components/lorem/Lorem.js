import React, { useState } from "react";
import "./lorem.css";
import text from "./data";
function Lorem() {
  const [para, setpara] = useState(0);
  const [ParaList, setParaList] = useState([]);

  const getPara = (e) => {
    e.preventDefault();
    let count = parseInt(para);
    if (count < 0) {
      count = 1;
    }
    const List = text.slice(0, count);
    setpara(count);
    setParaList(List);
  };

  return (
    <div className="lorem-bg">
      <div className="loremContent container">
        <h1 className="lorem-headingText text-uppercase text-center">
          tired of boring lorem ipsum ?
        </h1>
        <form
          onSubmit={(e) => getPara(e)}
          className="d-flex align-items-center"
        >
          <label htmlFor="loremPara" className="loremLabel">
            Paragraphs :{" "}
            <input
              type="number"
              name="para"
              id="loremPara"
              value={para}
              style={{ padding: "2px 4px" }}
              onChange={(e) => setpara(e.target.value)}
            />
          </label>
          <button type="submit" className="btn lorem-btn btn-primary my-4">
            Generate
          </button>
        </form>
        <div className="paragraphs text-center my-4">
          {ParaList.map((para, index) => {
            return (
              <p key={index} className="lorem-eachPara">
                {para}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lorem;
