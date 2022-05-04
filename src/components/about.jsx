import React from "react";
import myImage from "../img/profilepic.jpeg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Java_skill", content: "Java" },
        { id: "JavaScript_skill", content: "JavaScript"},
        { id: "HTML5_skill", content: "HTML5" },
        { id: "CSS3_skill", content: "CSS3" },
        { id: "Spring_skill", content: "Spring" },
        { id: "SpringBoot_skill", content: "Spring Boot"},
        { id: "ReactJS_skill", content: "ReactJS"},
        { id: "Webpack_skill", content: "Webpack" },
        { id: "jQuery_skill", content: "jQuery"},
        { id: "NodeJS_skill", content: "NodeJS"}
        ],
      about_me: [
        {
          id: "first-p-about",
          content:
          "Hello, I'm Brittany, and I'm passionate about creating things that live on the internet. Growing up in a small town, I have always had big dreams and aspirations. I am naturally curious and enjoy solving a problem. It's no surprise I have fallen in love with web development. A web design class back in 2014 would plant a seed that would resurface in 2021."
        },
        {
          id: "second-p-about",
          content:
          "Most recently, I am a graduate of the FastTrack Java Developer program. Having a background in hospitality management and a full stack developer certificate, I bring a well-rounded, moldable approach to the team. I have had the priviledge of collaborating with several teams to create beautiful, interactive web apps. One of my favorites is called Electro-Enthusiasts. Electro-Enthusiasts is a full stack project created as a community review forum to discuss new launches and review products. Check it out in my Projects section!"
        },
        {
          id: "third-p-about",
          content:
          "In my free time, I love to garden. I am passionate about bees and encourage everyone to plant a pollinator in their garden. You'll usually find me outside with a good book and classical music in my ears."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-circle rounded b-shadow-a"
                            src={myImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style={{ width: skill.porcentage }}
                                // aria-valuenow={skill.value}
                                // aria-valuemin="0"
                                // aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
