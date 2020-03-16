import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Paper from "../../assets/Paperbg.jpg";
const useStyles = makeStyles(theme => ({
  carouselitem: {
    backgroundImage: `url(${Paper})`,
    position: "relative",
    display: "grid",
    paddingTop: "15px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "5px",
      gridTemplateColumns: "50% 50%",
      gridTemplateRows: "auto auto auto", // image, arrows, text
      gridTemplateAreas: `
        "image image"
        "text text"
        "arrowleft arrowright";
      `
    },
    [theme.breakpoints.up("md")]: {
      height: "calc(60vh - 40px)",
      width: "100%",
      gridTemplateColumns:
        "calc(5vw - 10px) 2.5vw 60vw 1vw 22vw 2.5vw calc(5vw - 10px)",
      gridTemplateRows: "auto",
      marginTop: "20px",
      gridTemplateAreas: `"arrowleft . image .  text . arrowright";`
    }
  },
  image: {
    padding: "10px",
    gridArea: "image",
    width: "calc(100% - 20px)",
    maxWidth: "700px",
    maxHeight: "calc(100% - 40px)"
  },
  captionHolder: {
    gridArea: "text",
    padding: "10px",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      overflow: "hidden"
    }
  },
  caption: {
    width: "100%",
    overflowY: "scroll",
    height: "100%"
  },
  captionParagraph: {
    marginBottom: "8px"
  },
  arrowleft: {
    gridArea: "arrowleft",
    fontSize: "64px",
    textAlign: "center"
  },
  arrowright: {
    gridArea: "arrowright",
    fontSize: "64px",
    textAlign: "center"
  },
  quote: {
    marginTop: "10px",
    width: "100%",
    textAlign: "center",
    WebkitAlignContent: "center"
  },
  quoteText: {
    fontWeight: "bold"
  },
  quoteBy: {
    "&::before": {
      content: '"-- "',
      display: "inline"
    }
  }
}));

const Carousel = ({ items, quote }) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const carouselItems = items.map(item => {
    return (
      <div key={item.key} className={classes.carouselitem}>
        <div
          className={classes.arrowleft}
          onClick={() => {
            if (index > 0) setIndex(index - 1);
          }}
        >
          <ChevronLeft fontSize="inherit" />
        </div>
        <img src={item.image} className={classes.image} alt={item.alt} />
        <div className={classes.captionHolder}>
          <div className={classes.caption}>{item.caption(classes)}</div>
        </div>
        <div
          className={classes.arrowright}
          onClick={() => {
            if (index < items.length - 1) setIndex(index + 1);
          }}
        >
          <ChevronRight fontSize="inherit" />
        </div>
      </div>
    );
  });
  return (
    <>
      {carouselItems[index]}
      <div className={classes.quote}>
        <div className={classes.quoteText}>{quote.quoteText}</div>
        <div className={classes.quoteBy}>{quote.quoteBy}</div>
      </div>
    </>
  );
};

export default Carousel;
