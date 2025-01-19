import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
const CarouselPart = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // For tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000, // Adjust autoplay speed for smaller screens
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // Disable autoplay for smaller screens
        },
      },
    ],
  };

  const container = {
    marginTop: "18.5rem",
  };

  const carousel = {
    marginTop: "0%",
  };

  const responsiveTextStyle = {
    fontSize: "1.2rem",
  };

  return (
    <div className="carousel-container" style={carousel}>
      <Slider {...settings} ref={sliderRef}>
        {/* Slide 1 */}
        <div className="slide slide1">
          <div className="container" style={container}>
            <div className="row">
              <div id="content" className="col-12 text-center text-white p-20">
                <h6
                  className="text-white text-uppercase"
                  style={responsiveTextStyle}
                >
                  Discover your new favorite outfit.
                </h6>
                <h1 className="display-3 my-4">
                  We craft digital
                  <br />
                  experiences
                </h1>
                {/* <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide slide2">
          <div className="container" style={container}>
            <div className="row">
              <div id="content" className="col-12 col-lg-10 offset-lg-1 text-center text-white p-20">
                <h6
                  className="text-white text-uppercase"
                  style={responsiveTextStyle}
                >
                  Dress for the life you deserve.
                </h6>
                <h1 className="display-3 my-4">
                  Design Driven For <br />
                  Professionals
                </h1>
                {/* <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Custom Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => sliderRef.current.slickPrev()}
      >
        {/* Custom Previous Button */}
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => sliderRef.current.slickNext()}
      >
        {/* Custom Next Button */}
      </button>
    </div>
  );
};

export default CarouselPart;
