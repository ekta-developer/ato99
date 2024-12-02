import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselPart = () => {
  const sliderRef = useRef(null); // Reference to control the slider

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds interval
    arrows: false, // Disable default arrows, we'll use custom controls
  };

  const container = {
    marginTop: "18.5rem",
  };
  const carousel = {
    marginTop: "7%",
  };
  return (
    <div className="carousel-container" style={carousel}>
      <Slider {...settings} ref={sliderRef}>
        {/* Slide 1 */}
        <div className="slide slide1">
          <div className="container" style={container}>
            <div className="row">
              <div className="col-12 text-center text-white">
                <h6 className="text-white text-uppercase">
                  Discover your new favorite outfit.
                </h6>
                <h1 className="display-3 my-4">
                  We craft digital
                  <br />
                  experiences
                </h1>
                <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide slide2">
          <div className="container" style={container}>
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 text-white">
                <h6 className="text-white text-uppercase">
                  Dress for the life you deserve.
                </h6>
                <h1 className="display-3 my-4">
                  Design Driven For <br />
                  Professionals
                </h1>
                <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Custom Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => sliderRef.current.slickPrev()} // Navigate to previous slide
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        {/* <span className="sr-only">Previous</span> */}
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => sliderRef.current.slickNext()} // Navigate to next slide
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        {/* <span className="sr-only">Next</span> */}
      </button>
    </div>
  );
};

export default CarouselPart;
