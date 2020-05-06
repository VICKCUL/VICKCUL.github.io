import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Paper from "../../../assets/Paperbg.jpg";
import Vicky from "../../../assets/vicky.png";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "100%",
    WebkitAlignContent: "center",
    WebkitAlignItems: "center",
    textAlign: "center",
    verticalAlign: "middle"
  },
  menubutton: {
    marginTop: "2px",
    backgroundImage: `url(${Paper})`,
    "&:hover": {
      opacity: "0.5",
      cursor: "pointer"
    }
  }
}));
const MobileMenu = ({ active, setActive, history }) => {
  const classes = useStyles();
  const items = [
    { name: "about", path: "/#/about" },
    { name: "work", path: "/#/work" },
    { name: "activities", path: "/#/activities" },
    { name: "personal", path: "/#/personal" }
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = page => {
    if (typeof page !== "string") {
      setAnchorEl(null);
    } else {
      setActive(page);
      history.push(`${page}`);
      setAnchorEl(null);
    }
  };
  return (
    <>
      <img src={Vicky} style={{ height: "50px", zIndex:"100", position: "relative", margin: 0 }} /><br/>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menubutton}
      >
        {active}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items
          .map(item => {
            if (item.name !== active) {
              return (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    handleClose(item.name);
                  }}
                >
                  {item.name.toUpperCase()}
                </MenuItem>
              );
            }
            return null;
          })
          .filter(item => item != null)}
      </Menu>
    </>
  );
};

export default withRouter(MobileMenu);
