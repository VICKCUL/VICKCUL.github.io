import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useState } from "react";
import Cork from "./Cork";
import Shadows from "./Shadows";
import Pages from "./Pages";
import Boxes from "./Boxes";
import Pin from "./Pin";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  nav: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "90px",
      alignItems: "center",
      alignContent: "center",
      textAlign: "-webkit-center"
    },
    [theme.breakpoints.up("md")]: {
      height: "200px"
    },
    margin: "0px",
    padding: "0px",
    position: "relative",
    top: 0
  }
}));

const Nav = function({ history }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  console.log(history)
  const initial = history.location.pathname.split("/")[1] || "about"
  const [active, setActive] = useState(initial);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div
        className={classes.nav}
        style={{ display: matches ? "none" : "block" }}
      >
        <Cork />
        <Shadows active={active} hover={hover} />
        <Pages active={active} hover={hover} />
        <Pin active={active} hover={hover} />
        <Boxes
          active={active}
          hover={hover}
          setActive={setActive}
          setHover={setHover}
          history={history}
        />
      </div>
      <div
        className={classes.nav}
        style={{ display: matches ? "block" : "none" }}
      >
        <Cork />
        <Menu active={active} setActive={setActive} />
      </div>
    </>
  );
};

export default withRouter(Nav);
