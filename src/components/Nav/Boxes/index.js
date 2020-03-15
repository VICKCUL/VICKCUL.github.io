import React from "react";
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
    left: 0,
    zIndex: 109
  },
  left: {
    height: "100%",
    width: "40%",
    position: "relative",
    bottom: 0,
    margin: 0,
    padding: 0,
    left: 0,
    zIndex: 110
  },
  right: {
    height: "100%",
    width: "60%",
    position: "relative",
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    padding: 0
  },
  about: {
    width: "50%",
    height: "100%"
  },
  rightImages: {
    float: "right",
    height: "100%",
    display: "relative"
  },
  work: {
    width: "25%"
  },
  activities: {
    width: "14%"
  },
  personal: {
    width: "25%"
  }
});

export default function({ active, hover, setHover, setActive, history }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div
          className={classes.about}
          onMouseEnter={() => {
            setHover("about");
          }}
          onClick={() => {
            setActive("about");
            setHover(null);
            history.push("/")
          }}
        >
          &nbsp;
        </div>
      </div>
      <div className={classes.right}>
        <div
          className={`${classes.personal} ${classes.rightImages}`}
          onMouseEnter={() => {
            setHover("personal");
          }}
          onMouseOut={() => {
            setHover(null);
          }}
          onClick={() => {
            setActive("personal");
            setHover(null);
            history.push("/personal")
          }}
        >
          &nbsp;
        </div>
        <div
          className={`${classes.activities} ${classes.rightImages}`}
          onMouseEnter={() => {
            setHover("activities");
          }}
          onMouseOut={() => {
            setHover(null);
          }}
          onClick={() => {
            setActive("activities");
            setHover(null);
            history.push("/activities")
          }}
        >
          &nbsp;
        </div>
        <div
          className={`${classes.work} ${classes.rightImages}`}
          onMouseEnter={() => {
            setHover("work");
          }}
          onMouseOut={() => {
            setHover(null);
          }}
          onClick={() => {
            setActive("work");
            setHover(null);
            history.push("/work")
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}
