import React from "react";
import "./Banner.css";
import img from "../../assests/IMAGES/tshirt.jpg";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="banner py-5">
        <div className="row align-items-center ml-5">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold text-dark">
              Trending Tees: Style That Speaks!
            </h1>
            <p className="fs-4 text-muted">Discover Your Perfect Fit.</p>
            <p className="text-muted">
              From bold statements to classic designs, our exclusive collection
              of graphic t-shirts brings style and comfort to your everyday
              look. Shop now and elevate your wardrobe!
            </p>
            <button className="btn btn-brand me-2">
              Customize Your T-Shirt
            </button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center gap-3">
            <img
              src={img}
              alt="Graphic T-Shirt"
              className="img-fluid rounded"
              style={{ maxWidth: "300px" }}
            />
            {/* Uncomment for a second image */}
            {/* <img
              src={img}
              alt="Graphic T-Shirt 2"
              className="img-fluid rounded"
              style={{ maxWidth: "200px" }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
