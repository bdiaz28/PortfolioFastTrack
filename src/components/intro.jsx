import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import pdf from '../file/FullStackWebDev_Resume.pdf';

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hi! I'm Brittany Diaz</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Software Engineer",
                      "Full Stack Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-info btn js-scroll"
                  href="#work"
                  role="button"
                >
                  View Projects
                </a>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-info btn js-scroll"
                  href={pdf} target="_blank" download="Resume_BDiaz.pdf"
                  role="button"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
