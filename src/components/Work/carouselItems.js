import React from "react";
import mug from "../../assets/mug2.jpg";
import slides from "../../assets/Oral_Exam.key";
import predgame from "../../assets/PredictionGame.pdf";
import bayesian from "../../assets/Bayesian.pdf";
import stochastic from "../../assets/Stochastic.pdf";
import nonlinear from "../../assets/Nonlinear_Final_Project_on_Fast-Slow_Analysis.pdf"
import graduate from "../../assets/graduate.jpg";
import HarmonicTriangle from "../../assets/HarmonicTriangle.pdf";
import Frame from "../../assets/frame.pdf";
import Determinants from "../../assets/Determinants.pdf";
import Oscars from "../../assets/ThoughtsAboutOscar.pdf";
import Ballet from "../../assets/Ballet.pdf";
import GovernmentWebsites from "../../assets/GovernmentWebsites.pdf";
import TA from "../../assets/TA.jpg";
import myfunnypost from "../../assets/myfunnypost.jpg";
import rainbow from "../../assets/rainbow.pdf";
import MixingTimes from "../../assets/MixingTimesoftheGeneralizedRooksWalk.pdf";
import CalDay from "../../assets/calday.jpg";
import CalDayPoster from "../../assets/poster-mixing-times.pdf";
export default [
  {
    key: "work1",
    image: mug,
    alt: "Math mug",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          This is my daily life would look like.
        </div>
        <div className={classes.captionParagraph}>
          Here are my ongoing graduate course projects at Notre Dame:
        </div>
        <div className={classes.captionParagraph}>
          <strong>ACMS 60786</strong>: Linear Models{" "}
          <a href={predgame}>Weather Prediction</a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>ACMS 60885</strong>: Bayesian Statistics{" "}
          <a href={bayesian}>Bayesian Brain</a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>ACMS 70860</strong>: Stochastic Analysis{" "}
          <a href={stochastic}>Numerical SDE in Brain</a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>ACMS 60630</strong>: Nonlinear Dynamics{" "}
          <a href={nonlinear}>Nonlinear Final Project on Fast-Slow Analysis</a>
        </div>
        <div className={classes.captionParagraph}>
          And my{" "}
          <a href={slides} target="_blank" rel="noopener noreferrer">
            Oral Exam Slides (keynote)
          </a>{" "}
          and{" "}
          <a href="https://github.com/VICKCUL/oral-exam/blob/master/oral.m">
            Code
          </a>
        </div>
      </>
    )
  },
  {
    key: "work2",
    image: graduate,
    alt: "me reading a book",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          Here are my undergraduate course projects at Berkeley:
        </div>
        <div className={classes.captionParagraph}>
          <strong>Math 160</strong>: Math History{" "}
          <a href={HarmonicTriangle} target="_blank" rel="noopener noreferrer">
            Harmonic Triangle
          </a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>Math 130</strong>: Classical Geometry{" "}
          <a href={Frame} target="_blank" rel="noopener noreferrer">
            Hilbert Space Frame Theory
          </a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>Stat 133</strong>: R Programming{" "}
          <a href={Determinants} target="_blank" rel="noopener noreferrer">
            Determinants of Home Price and Its Fluctuation Over Time
          </a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>Stat 157</strong>: Probability Seminar{" "}
          <a href={Oscars} target="_blank" rel="noopener noreferrer">
            Oscar Best Picture Prediction
          </a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>Stat 153</strong>: Time Series{" "}
          <a href={Ballet} target="_blank" rel="noopener noreferrer">
            A Time Series Perspective of Ballet, “Shall We Dance?”
          </a>
        </div>
        <div className={classes.captionParagraph}>
          <strong>INFO W18</strong>: Python{" "}
          <a
            href={GovernmentWebsites}
            target="_blank"
            rel="noopener noreferrer"
          >
            Government Website Analysis
          </a>
        </div>
      </>
    )
  },
  {
    key: "work3",
    image: TA,
    alt: "me TAing a class",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I was the TA for the following courses in the past:
        </div>
        <div className={classes.captionParagraph}>
          ACMS 10145 --Fall 2018: <strong>Stats for Busines</strong>
        </div>
        <div className={classes.captionParagraph}>
          ACMS 30530 --Spring 2019: <strong>Intro to Probability</strong>
        </div>
        <div className={classes.captionParagraph}>
          ACMS 40740 --Fall 2019: <strong>Comp NeuroSci</strong>
        </div>
        <div className={classes.captionParagraph}>
          ACMS 40640 --Spring 2020: <strong>Artificial Neural Networks</strong>
        </div>
      </>
    )
  },
  {
    key: "work4",
    image: myfunnypost,
    alt: "me presenting",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          I like to attend conferences, and get to know other scholars with
          their projects. This is the REU presentation at Missouri State
          University over the summer of 2017. I am giving a talk on rainbow
          configurations, a type of anti-Ramsey problem from combinatorics. Also
          see{" "}
          <a href={rainbow} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </div>
        <div className={classes.captionParagraph}>
          I have also given several talks about the topic on the Mixing Time of
          Generalized Rook's Walk at different conferences. You can also find{" "}
          <a href={MixingTimes} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </div>
      </>
    )
  },
  {
    key: "work5",
    image: CalDay,
    alt: "me and my poster at Cal Day at Berkeley",
    caption: classes => (
      <>
        <div className={classes.captionParagraph}>
          Always give back to the community where I come from. I volunteered at
          Statistics Department on Cal Day(Apr. 22nd. 2017) by giving a poster
          talk to welcome the prospective students. Poster can also found{" "}
          <a href={CalDayPoster} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </div>
      </>
    )
  }
];
