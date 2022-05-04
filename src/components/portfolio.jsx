import React from "react";


import electro from "../img/electroEnthusiast.jpeg";
import beautyblog from "../img/beautyblog.jpg";
import regex from "../img/regex.jpg"
import craftcritic from "../img/craftcritic.jpg"


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check out what I've created recently!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={electro} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Electro-Enthusiasts</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Handlebars.js, ReactJS, Express.js, Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <a
                      className="btn btn-primary btn-sm mr-1 js-scroll"
                      href="https://electroenthusiast.herokuapp.com/login"
                      target="_blank" rel="noopener noreferrer"
                      role="button"
                    >
                      Project
                    </a>
                    <a
                      className="btn btn-primary btn-sm col-xs-2  js-scroll"
                      href="https://github.com/tmichae4/Electro-Enthusiast.git"
                      target="_blank" rel="noopener noreferrer"
                      role="button"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                <div className="work-img">
                  <img src={beautyblog} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Brittany's Beauty Blog</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          CMS-style Blog site using MVC architecture
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <a
                        className="btn btn-primary btn-sm mr-1 js-scroll"
                        href="https://brittanysbeautyblog.herokuapp.com/login"
                        target="_blank" rel="noopener noreferrer"
                        role="button"
                      >
                        Project
                      </a>
                      <a
                        className="btn btn-primary btn-sm col-xs-2  js-scroll"
                        href="https://github.com/bdiaz28/beautyBlog.git"
                        target="_blank" rel="noopener noreferrer"
                        role="button"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                <div className="work-img">
                  <img src={regex} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Regex Tutorial</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          A GitHub gist matching an email
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <a
                        className="btn btn-primary btn-sm mr-1 js-scroll"
                        href="https://gist.github.com/bdiaz28/52bad026f6a57fcef30eb21a9be660f3"
                        target="_blank" rel="noopener noreferrer"
                        role="button"
                      >
                        Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">

                <div className="work-img">
                  <img src={craftcritic} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Charlotte's Craft Critic</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Front-end group project using agile development methodologies
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <a
                        className="btn btn-primary btn-sm mr-1 js-scroll"
                        href="https://bdiaz28.github.io/Project-1v3/"
                        target="_blank" rel="noopener noreferrer"
                        role="button"
                      >
                        Project
                      </a>
                      <a
                        className="btn btn-primary btn-sm col-xs-2  js-scroll"
                        href="https://github.com/bdiaz28/Project-1v3.git"
                        target="_blank" rel="noopener noreferrer"
                        role="button"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
