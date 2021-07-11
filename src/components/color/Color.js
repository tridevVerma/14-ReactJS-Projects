import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import "./color.css";
import { generateShades } from "./Utility";

const useStyles = makeStyles((theme) => ({
  bg: {
    position: "absolute",
    top: 0,
    width: "100%",
    minHeight: "100vh",
    height: "fit-content",
    backgroundColor: "rgb(241, 251, 255)",
  },
  headingText: {
    width: "fit-content",
    display: "inline-block",
    color: "#08475a",
    fontWeight: "bold",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem",
    },
  },
}));

function Color() {
  const classes = useStyles();
  const [color, setcolor] = useState("#f15025");
  const [range, setrange] = useState(10);
  const [lightShadesRGB, setlightShadesRGB] = useState([]);
  const [darkShadesRGB, setdarkShadesRGB] = useState([]);
  const [lightShadesHEX, setlightShadesHEX] = useState([]);
  const [darkShadesHEX, setdarkShadesHEX] = useState([]);

  const getShades = (e) => {
    e.preventDefault();
    let [lightRGB, darkRGB, lightHEX, darkHEX] = [
      ...generateShades(color, range),
    ];
    if (lightRGB.length > 0) {
      setlightShadesRGB(lightRGB);
      setdarkShadesRGB(darkRGB);
      setlightShadesHEX(lightHEX);
      setdarkShadesHEX(darkHEX);
    }
  };

  useEffect(() => {
    let [lightRGB, darkRGB, lightHEX, darkHEX] = [
      ...generateShades(color, range),
    ];
    if (lightRGB.length > 0) {
      setlightShadesRGB(lightRGB);
      setdarkShadesRGB(darkRGB);
      setlightShadesHEX(lightHEX);
      setdarkShadesHEX(darkHEX);
    }
  }, [color, range]);

  const copyColor = (code) => {
    navigator.clipboard.writeText(code).then(
      function () {
        console.log("successfully copied");
      },
      function () {
        alert("can't copy");
      }
    );
  };
  return (
    <div className={classes.bg}>
      <div className="color-selector">
        <h1 className={classes.headingText}>Color Generator</h1>
        <form className="color-form" onSubmit={(e) => getShades(e)}>
          <div className="color-input shadow">
            <input
              type="text"
              name="color"
              id="color"
              className="color-code"
              placeholder="#f15025"
              value={color}
              onChange={(e) => setcolor(e.target.value)}
            />

            <button type="submit" className="color-btn">
              Submit
            </button>
          </div>

          <input
            type="range"
            className="form-range my-2 color-slider"
            onChange={(e) => setrange(e.target.value)}
            value={range}
            min="10"
            max="50"
            step="10"
            id="customRange3"
          />
        </form>
      </div>
      <div className="colorsBox row mx-0">
        {lightShadesRGB.map((shade, index) => {
          return (
            <div
              className="col-lg-2 col-md-4 col-6 singleColor"
              style={{ backgroundColor: `${shade}`, color: "black" }}
              key={index}
            >
              {shade}
              <br />
              {lightShadesHEX[index]}
              <div className="copy-color-btns">
                <button
                  className="btn btn-outline-dark btn-rgb"
                  onClick={() => copyColor(shade)}
                >
                  RGB
                </button>
                <button
                  className="btn btn-outline-dark btn-hex"
                  onClick={(e) => copyColor(lightShadesHEX[index])}
                >
                  HEX
                </button>
              </div>
            </div>
          );
        })}
        {darkShadesRGB.map((shade, index) => {
          return (
            <div
              className="col-lg-2 col-md-4 col-6 singleColor"
              style={{ backgroundColor: `${shade}`, color: "white" }}
              key={index}
            >
              {shade}
              <br />
              {darkShadesHEX[index]}
              <div className="copy-color-btns">
                <button
                  className="btn btn-outline-light btn-rgb"
                  onClick={(e) => copyColor(shade)}
                >
                  RGB
                </button>
                <button
                  className="btn btn-outline-light btn-hex"
                  onClick={(e) => copyColor(darkShadesHEX[index])}
                >
                  HEX
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Color;
