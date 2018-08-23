import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
                style={{ display: "flex" }}
              >
                <div
                  className="columns portfolio-item"
                  style={{ margin: "auto" }}
                >
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img
                        alt
                        src="https://s3.amazonaws.com/freelancer-userprofilebucket/up-plysplash.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Up-Ply</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div
                  className="columns portfolio-item"
                  style={{ margin: "auto" }}
                >
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img
                        alt
                        src="https://s3.amazonaws.com/freelancer-userprofilebucket/freelancersplash.png"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Freelancer</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt src="images/portfolio/judah.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Judah</h5>
                          <p>Webdesign</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt src="images/portfolio/into-the-light.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Into The Light</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt src="images/portfolio/farmerboy.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Farmer Boy</h5>
                          <p>Branding</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Girl</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Origami</h5>
                          <p>Illustrration</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt src="images/portfolio/retrocam.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Retrocam</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://s3.amazonaws.com/freelancer-userprofilebucket/uplydash.png"
                alt
              />
              <div className="description-box">
                <h4>Up-Ply</h4>
                <p>
                  Technologies used included React.js, Redux, Express/Node.js,
                  PostgresSQLl, Amazon Web Services and Sass. Up-Ply is a team
                  based project management system that simplifies managing users
                  and tasks. Uses PostgreSQL to create relations between teams,
                  projects and users. Uses AWS S3 buckets to handle file upload
                  and file storage.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Full-Stack, Web Development
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.up-ply.dylanbrandenburg.com">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="https://s3.amazonaws.com/freelancer-userprofilebucket/freelancerdash.png"
                alt
              />
              <div className="description-box">
                <h4>Freelancer</h4>
                <p>
                  Created using React.js, Redux, Express/Node.js, PostgresSql,
                  Sass, Material-UI and AWS. A Group Full-Stack Web app project
                  that adopts certain social media aspects to create a unique
                  experience. Allows employers to create job listings allowing
                  freelancers to see and apply to the job if they are a good
                  fit. Employers are able to choose a freelancer based off their
                  skill set and portfolio hosted on their profile. Uses
                  Express/Node.Js to run the server which handles server
                  sessions and authentication using Auth0. Uses Amazon web
                  services/S3 to handle file storage.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Full-Stack, Web Development
                </span>
              </div>
              <div className="link-box">
                <a href="http://freelancer.dylanbrandenburg.com">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-judah.jpg"
                alt
              />
              <div className="description-box">
                <h4>Judah</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-intothelight.jpg"
                alt
              />
              <div className="description-box">
                <h4>Into the Light</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-farmerboy.jpg"
                alt
              />
              <div className="description-box">
                <h4>Farmer Boy</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Webdesign
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-girl.jpg"
                alt
              />
              <div className="description-box">
                <h4>Girl</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-origami.jpg"
                alt
              />
              <div className="description-box">
                <h4>Origami</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Illustration
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-retrocam.jpg"
                alt
              />
              <div className="description-box">
                <h4>Retrocam</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Webdesign, Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
