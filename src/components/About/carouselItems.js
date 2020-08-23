import React from "react";
import about1 from "../../assets/about1.jpg";
import about1pdf from "../../assets/V_CV.pdf";
import about2 from "../../assets/about2.jpg";
import afraid from "../../assets/afraid.jpg";
// import newimage from "../../assets/nameoffile.jpg"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default [
  {
    key: "thefirst",
    image: about1,
    alt: "Mask",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          My name is Vicky Zhu. I am a 3rd-year Applied Computational
          Mathematics and Statistics(ACMS) graduate student at University of
          Notre Dame. I received my B.A. in mathematics and statistics from
          University of California, Berkeley in 2018.
        </div>
        <div className={classes.captionParagraph}>
          I enjoy studying computational neuroscience and artificial neural
          networks the most. I also have diverse interests in life including:
          music, literature, movies, dance, and swimming...
        </div>
        <div className={classes.captionParagraph}>
          This is my <a href={about1pdf}>CV</a>
        </div>
      </>
    )
  },
  {
    key: "afraid",
    image: afraid,
    alt: "don't be afraid sign",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I am an explorer, and I like to face all the challenges in life.
          Through the looking glass, I believed in a promising wonderland...
        </div>
      </>
    )
  },
  {
    key: "about2",
    image: about2,
    alt: "contact me",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>Contact</div>
        <div className={classes.captionParagraph}>
          ND email: <a href="mailto:rzhu@nd.edu">rzhu@nd.edu</a>
        </div>
        <div className={classes.captionParagraph}>
          Cal email: <a href="mailto:renjun.zhu@berkeley.edu">renjun.zhu@berkeley.edu</a>
        </div>
        <div className={classes.captionParagraph}>
          text: <a href="tel:+16266956867">626-695-6867</a>
        </div>
        <div className={classes.captionParagraph}>
          <a href="https://www.linkedin.com/in/renjun-vicky-zhu">
            <LinkedInIcon color="blue" />
          </a>
        </div>
      </>
    )
  }
];
