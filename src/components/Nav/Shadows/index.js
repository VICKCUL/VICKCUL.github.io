import React from "react";
import About from "../../../assets/About-shadow.png";
import Work from "../../../assets/Work-shadow.png";
import Activities from "../../../assets/Activities-shadow.png";
import Personal from "../../../assets/Personal-shadow.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0
  },
  active: {
    zIndex: "97"
  },
  regular: {
    zIndex: "93"
  },
  hover: {
    zIndex: "100"
  },
  left: {
    height: "100%",
    width: "40%",
    position: "relative",
    bottom: 0,
    margin: 0,
    padding: 0,
    left: 0
  },
  right: {
    height: "100%",
    width: "60%",
    position: "relative",
    bottom: 0,
    margin: 0,
    padding: 0
  },
  images: {
    height: "100%"
  },
  imagesRight: {
    position: "absolute",
    right: 0
  }
});

export default function({ active, hover }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img
          className={`${
            hover === "about"
              ? classes.hover
              : active === "about"
              ? classes.active
              : classes.regular
          } ${classes.about} ${classes.images}`}
          src={About}
          alt=""
        />
      </div>
      <div className={classes.right}>
        <img
          className={`${
            hover === "work"
              ? classes.hover
              : active === "work"
              ? classes.active
              : classes.regular
          }  ${classes.images} ${classes.imagesRight}`}
          src={Work}
          alt=""
        ></img>
        <img
          className={`${
            hover === "activities"
              ? classes.hover
              : active === "activities"
              ? classes.active
              : classes.regular
          } ${classes.images} ${classes.imagesRight}`}
          src={Activities}
          alt=""
        ></img>
        <img
          className={`${
            hover === "personal"
              ? classes.hover
              : active === "personal"
              ? classes.active
              : classes.regular
          } ${classes.images} ${classes.imagesRight}`}
          src={Personal}
          alt=""
        ></img>
      </div>
    </div>
  );
}
