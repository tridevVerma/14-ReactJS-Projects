import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

import "./accordion.css";
import QuestionList from "./QuestionList";
import questions from "./data";

const useStyles = makeStyles((theme) => ({
  bg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgb(100, 31, 165)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

function Accordion() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div
        className={classNames(classes.box, "container shadow-lg rounded py-5")}
      >
        <div className="row px-5">
          <div className="col-md-4 col-lg-4 col-10 my-3 mx-auto">
            <h2 className="text-capitalize">
              questions and answers about login
            </h2>
          </div>
          <div className="col-md-6 col-lg-8 col-10 mx-auto">
            <QuestionList data={questions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
