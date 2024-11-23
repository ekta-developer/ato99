import React from "react";

const TopNav = () => (
  <div className="top-nav" id="home">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            {/* Contact Information */}
            <div className="d-flex align-items-center">
              <p className="mb-0 me-3">
                <i className="bx bxs-envelope"></i> info@example.com
              </p>
              <p className="mb-0">
                <i className="bx bxs-phone-call"></i> 123 456-7890
              </p>
            </div>

            {/* Social Icons */}
            <div className="social-icons d-flex">
              <a href="#" className="me-3">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="me-3">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="me-3">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#">
                <i className="bx bxl-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopNav;
