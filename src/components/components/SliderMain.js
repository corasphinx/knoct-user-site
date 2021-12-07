import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slidermain = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="spacer-single" />
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={0}
          duration={600}
          triggerOnce
        >
          <h6 className="">
            <span className="text-uppercase color">Knoct</span>
          </h6>
        </Reveal>
        <div className="spacer-10" />
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce
        >
          <h1 className="">One Identity for Everything</h1>
        </Reveal>
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={600}
          triggerOnce
        >
          <p className=" lead">
            creating a world with transparency, trust and privacy by building a
            one identity platform for users to interact to authenticate and
            exchange data.
          </p>
        </Reveal>
        <div className="spacer-10" />
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={800}
          duration={900}
          triggerOnce
        >
          <span
            onClick={() => window.open("/#", "_self")}
            className="btn-main lead"
          >
            Get Started
          </span>
          <div className="mb-sm-30" />
        </Reveal>
      </div>
      <div className="col-md-6 xs-hide">
        <Reveal
          className="onStep"
          keyframes={fadeIn}
          delay={900}
          duration={1500}
          triggerOnce
        >
          {/*<img src="./img/KnoctLogo.png" className="lazy img-fluid" alt="" />*/}
        </Reveal>
      </div>
    </div>
  </div>
);
export default slidermain;
