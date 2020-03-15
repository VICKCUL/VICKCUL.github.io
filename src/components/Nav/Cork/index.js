import React from "react";
import CorkImage from "../../../assets/corkbg.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  cork: {
    backgroundImage: `url(${CorkImage})`,
    zIndex: 0,
    margin: "0px",
    padding: "0px",
    height: "200px",
    width: "100%",
    backgroundRepeat: "round",
    position: "absolute"
  }
});

export default function() {
  const classes = useStyles();
  return <div className={classes.cork}></div>;
}
