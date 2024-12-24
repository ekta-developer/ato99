import React from "react";
import img from "../../assests/IMAGES/img/2934.jpg";
import "../../assests/CSS/css/bootstrap.min.css";
// import "./about.css"
const About = () => {
  return (
    <>
      {/* ABOUT Section */}
      {/* <section id="about"> */}
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Image Section */}
            <div
              className="col-lg-3 col-md-5 col-sm-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                className="img-fluid rounded w-100"
                data-wow-delay="0.1s"
                src={img}
                alt="About Us"
              />
            </div>

            {/* Text Section */}
            <div
              className="col-lg-6 col-md-7 col-sm-12 wow fadeInUp text-center text-md-start"
              data-wow-delay="0.3s"
            >
              <h1 className="display-5 mb-2">
                We Make Your Home Like A Garden
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              <a className="btn btn-brand py-3 px-4 me-2" href="#">
                Explore More
              </a>
            </div>

            {/* Features Section */}
            <div
              className="col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-4">
                <div className="col-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Award Winning</h4>
                    <span>
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo magna.
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Dedicated Team</h4>
                    <span>
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo magna.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default About;
