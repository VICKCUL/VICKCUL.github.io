import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Paper from "../../assets/Paperbg.jpg";
const useStyles = makeStyles({
  carouselitem: {
    backgroundImage: `url(${Paper})`,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "calc(100% - 40px)",
    margin: "20px",
    height: "calc(100vh - 350px)"
  },
  image: {
    height: "90%",
    marginRight: "20px",
    padding: "20px"
  },
  captionHolder: {
    width: "30%",
    height: "calc(100vh - 450px)",
    overflowY: "hidden"
  },
  caption: {
    width: "100%",
    overflowY: "scroll",
    height: "100%"
  },
  captionParagraph: {
    marginBottom: "10px"
  },
  arrow: {
    margin: "5%",
    width: "5%",
    height: "20%",
    fontSize: "64px"
  },
  quote: {
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
});

const Carousel = ({ items, quote }) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const carouselItems = items.map(item => {
    return (
      <div key={item.key} className={classes.carouselitem}>
        <div
          className={classes.arrow}
          onClick={() => {
            if (index > 0) setIndex(index - 1);
          }}
        >
          <ChevronLeft fontSize="inherit" />
        </div>
        <img src={item.image} className={classes.image} alt={item.alt}/>
        <div className={classes.captionHolder}>
          <div className={classes.caption}>{item.caption(classes)}</div>
        </div>
        <div
          className={classes.arrow}
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
