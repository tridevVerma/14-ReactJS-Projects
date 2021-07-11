import React from "react";
import { useHistory } from "react-router";

import { projectNames } from "./projectNames";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Typography variant="h2" className={classes.title}>
          14 React Projects
        </Typography>
      </div>
      <div style={{ backgroundColor: "#e2e8f0", paddingBottom: "2rem" }}>
        <div className="container">
          <div className="row gy-4">
            {projectNames.map((project, index) => {
              return (
                <div
                  key={index}
                  className="col-10 col-sm-6 col-lg-4 mx-auto mx-sm-0"
                  onClick={() => history.push(project.link)}
                >
                  <div className="card h-100">
                    <img
                      src={project.image}
                      className="card-img-top h-100"
                      alt="project-img"
                    />
                    <div className="card-body">
                      <Typography variant="h6" className="text-center">
                        {project.name}
                      </Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
