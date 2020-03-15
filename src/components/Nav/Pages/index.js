import React from "react";
import About from "../../../assets/About.png";
import Work from "../../../assets/Work.png";
import Activities from "../../../assets/Activities.png";
import Personal from "../../../assets/Personal.png";
import Vicky from "../../../assets/vicky.png";
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
    zIndex: "98"
  },
  pin: {
    zIndex: "99"
  },
  regular: {
    zIndex: "95"
  },
  hover: {
    zIndex: "101"
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
  },
  tag: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  tagImage: {
    width: "10%",
    transform: "rotate(-5deg)",
    boxShadow: "5px 5px 20px"
  }
});

export default function({ active, hover }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.tag}>
        <img className={classes.tagImage} src={Vicky} />
      </div>
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
          alt="about page menuitem"
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
          alt="work page menuitem"
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
          alt="activities page menuitem"
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
          alt="personal page menuitem"
        ></img>
      </div>
    </div>
  );
}
