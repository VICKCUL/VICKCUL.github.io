import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Cork from "./Cork";
import Shadows from "./Shadows";
import Pages from "./Pages";
import Boxes from "./Boxes";
import Pin from "./Pin";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles({
  nav: {
    width: "100%",
    height: "200px",
    margin: "0px",
    padding: "0px",
    position: "relative",
    top: 0
  }
});

const Nav = function({ history }) {
  const classes = useStyles();
  const [active, setActive] = useState("about");
  const [hover, setHover] = useState(null);
  return (
    <div className={classes.nav}>
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
  );
};

export default withRouter(Nav);
