import React, { Component } from "react";
import Skills from "../Skills/Skills";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="resume">
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                As a full-stack developer learning new skills are a must for me.
                I strive to branch and out learn as much as possible while
                continually improving my core knowledge and understanding of
                JavaScript related technologies.
              </p>
              {/* <div className="bars"> */}
              <Skills />

              {/* <ul className="skills">
                  <li>
                    <span className="bar-expand photoshop" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand illustrator" />
                    <em>React.Js</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>Node.Js</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>PostgresSQL</em>
                  </li>
                </ul> */}
              {/* </div> */}
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
            <br />
            <hr />
            <br />
          </div>{" "}
          {/* End skills */}
          {/* Education
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Freelancer- Group Project. Web Developer</h3>
                  <p className="info">
                    Full-Stack Developer <span>•</span>{" "}
                    <em className="date">July 2018 - August 2018</em>
                  </p>
                  <p>
                    Created using React.js, Redux, Express/Node.js, PostgresSql,
                    Sass, Material-UI and AWS. A Group Full-Stack Web app
                    project that adopts certain social media aspects to create a
                    unique experience. Allows employers to create job listings
                    allowing freelancers to see and apply to the job if they are
                    a good fit. Employers are able to choose a freelancer based
                    off their skill set and portfolio hosted on their profile.
                    Uses Express/Node.Js to run the server which handles server
                    sessions and authentication using Auth0. Uses Amazon web
                    services/S3 to handle file storage.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Up-Ply-Project. Web Developer</h3>
                  <p className="info">
                    Full-Stack Developer <span>•</span>{" "}
                    <em className="date">June 2018 - July 2018</em>
                  </p>
                  <p>
                    Technologies used included React.js, Redux, Express/Node.js,
                    PostgresSQLl, Amazon Web Services and Sass. Up-Ply is a team
                    based project management system that simplifies managing
                    users and tasks. Uses PostgreSQL to create relations between
                    teams, projects and users. Uses AWS S3 buckets to handle
                    file upload and file storage.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>DevMountain</h3>
                  <p className="info">
                    Full Stack Web Development, Computer Software Engineering
                    <span>•</span> <em className="date">August 2018</em>
                  </p>
                  <p>
                    Maintained accelerated pace required for student projects
                    and completed daily software development tasks.
                    <br />
                    Technologies learned includes JavaScript, ES6, React, Redux,
                    React Router, Node.js, Express.js, MassiveJS, SQL, RESTful
                    APIs, Axios, HTML5, CSS3
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Texas At Dallas</h3>
                  <p className="info">
                    B.A. Degree in Emerging Media And Communcation{" "}
                    <span>•</span> <em className="date">May 2018</em>
                  </p>
                  <p>
                    Focus in design including UI/UX , Mobile and Web App.
                    <br />
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
----------------------------------------------- */}
          {/* End Work */}
          {/* Skills
----------------------------------------------- */}
        </section>
      </React.Fragment>
    );
  }
}
