import React from "react";
import img from "../../assests/IMAGES/img/2934.jpg"
import "../../assests/CSS/css/bootstrap.min.css"
const About = () => {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <section id="about">
        {/* <!-- <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 py-5">
                    <div className="row">

                        <div className="col-12">
                            <div className="info-box">
                                <img src="img/icon6.png" alt="">
                                <div className="ms-4">
                                    <h5>Digital Marketing</h5>
                                    <p>Create a sense of urgency with a limited-time offer: "Shop our new arrivals now and get 20% off your entire purchase for a limited time only! Don't miss out on these must-have pieces."
                                        Spark curiosity and encourage exploration: "Ready to revamp your wardrobe? Explore our diverse collection of clothing and accessories and discover new styles that will take your look to the next level."
                                        End with a clear call to action: "Elevate your everyday style. Shop our latest collection today!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="info-box">
                                <img src="img/icon4.png" alt="">
                                <div className="ms-4">
                                    <h5>E-mail Marketing</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="info-box">
                                <img src="img/icon5.png" alt="">
                                <div className="ms-4">
                                    <h5>Buisness Marketing</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src="img/." alt="">
                </div>
            </div>
        </div> --> */}
        {/* <!-- About Start --> */}
        <div className="container-xxl py-2">
          <div className="container">
            <div className="row g-5 align-items-end">
              <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                <img
                  className="img-fluid rounded"
                  data-wow-delay="0.1s"
                  src={img}
                />
              </div>
              <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                {/* <!-- <h1 className="display-1 text-primary mb-0">25</h1> -->
                    <!-- <p className="text-primary mb-2">Year of Experience</p> --> */}
                <h1 className="display-5 mb-2">We Make Your Home Like A Garden</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-brand py-3 px-4" href="">
                  Explore More
                </a>
              </div>
              <div
                className="col-lg-3 col-md-12 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="row g-5">
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="border-start ps-4">
                      <i className="fa fa-award fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Award Winning</h4>
                      <span>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit
                        clita duo justo magna
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="border-start ps-4">
                      <i className="fa fa-users fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Dedicated Team</h4>
                      <span>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit
                        clita duo justo magna
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}
      </section>
    </>
  );
};

export default About;
