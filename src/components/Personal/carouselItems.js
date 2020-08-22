import React from "react";
import piano from "../../assets/pianoplay1.jpg";
import bird from "../../assets/resizebird.jpg";
import food from "../../assets/food.jpg";
import sunset from "../../assets/sunset2.jpg";
export default [
  {
    key: "personal1",
    image: piano,
    alt: "Me playing the piano",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I love music of many kinds, I started playing the piano a couple years ago
          and recently learned how to play the guitar...
        </div>
      </>
    )
  },
  {
    key: "personal2",
    image: bird,
    alt: "A blind charchoal drawing of a bird",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I also like drawing. This is a blind drawing, which is a practice in
          drawing when you only look at the object, not the paper. I think it's
          like meditaion...
        </div>
      </>
    )
  },
  {
    key: "personal3",
    image: food,
    alt: "Excellent food",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          Food is so tempting in my life...
        </div>
      </>
    )
  },
  {
    key: "personal4",
    image: sunset,
    alt: "Me walking on the beach in the sunset",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          In my leisure time, I also like to watch the sunset.
        </div>
      </>
    )
  }
];
