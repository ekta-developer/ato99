import React from "react";
import img from "../../assests/IMAGES/img/2934.jpg";
import "../../assests/CSS/css/bootstrap.min.css";
// import "./about.css"
const About = () => {
  return (
    <>
      {/* ABOUT Section */}
      {/* <section id="about"> */}
      <div className="container-fluid py-4" style={{ marginBottom: "40px" }}>
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
              <h1 className="display-5 mb-2">Why Choose TA99 store?</h1>
              <p className="mb-4">
                Welcome to TA99 store, in which fashion meets comfort! We are an
                modern on-line fashion platform devoted to bringing the
                modern-day traits and terrific garb immediately to the doorstep.
                Our mission is easy: to offer you a extensive variety of
                style-forward and versatile garb at fees that don’t cost a
                fortune.
              </p>
              {/* <a className="btn btn-brand py-3 px-4 me-2" href="#">
                Explore More
              </a> */}
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
                    <h4 className="mb-3">Seamless Shopping Experience</h4>
                    <span>
                      With an clean-to-navigate website and speedy, reliable
                      delivery, purchasing with us is handy.
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Customer-Centric Approach:</h4>
                    <span>
                      Your pleasure is our priority. From easy navigation to
                      rapid delivery, we make certain a continuing shopping
                      experience.
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
