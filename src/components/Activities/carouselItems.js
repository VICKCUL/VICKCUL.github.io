import React from "react";
import hiking from "../../assets/hiking.jpg";
import play from "../../assets/play.jpg";
import colorrun from "../../assets/colorrun.jpg";
import swimming from "../../assets/swimming.jpg";
export default [
  {
    key: "activities1",
    image: hiking,
    alt: "A hiking group in Oregon",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I am outgoing. I like to join all kinds of group activities such as
          hiking, exercising, and swimming.
        </div>
        <div className={classes.captionParagraph}>
          This is a very beautiful hiking trail in Oregon, which I already
          forgot the name. It is a very clear day, and all of us love it...
        </div>
      </>
    )
  },
  {
    key: "activities2",
    image: play,
    alt: "Wathing a play at the globe theater in London",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          On the weekends, I like to go to performances with friends, and I like
          to be in the audience, to appreciate the arts whoever is performing...
        </div>
        <div className={classes.captionParagraph}>
          This is the play, Othello, at Shakespeare's Globe in London, during my
          spring semester in the study abroad program at Oxford 2015. We could
          only get standing tickets, and I found myself enjoying this much more
          than a seated performance.
        </div>
      </>
    )
  },
  {
    key: "activities3",
    image: colorrun,
    alt: "The San Diego Color Run",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          This was couple years ago at the San Diego color run. I went with a
          group of friends, and had a lot of fun...
        </div>
      </>
    )
  },
  {
    key: "activities4",
    image: swimming,
    alt: "Me swimming at Cal",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          Sometimes, I dream to become a little mermaid to discover the world
          under the water.
        </div>
        <div className={classes.captionParagraph}>
          This is when I first learned how to swim couple years ago... Since
          then, I always invite my friends to go swimming whenever they come to
          visit me.
        </div>
      </>
    )
  }
];
