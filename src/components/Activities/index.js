import React from "react";
import Carousel from "../Carousel";
import carouselItems from "./carouselItems.js";
import quote from "./quote";
const Activities = function() {
  return <Carousel items={carouselItems} quote={quote} />;
};

export default Activities;
