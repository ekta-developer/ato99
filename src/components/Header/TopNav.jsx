import React from "react";

const TopNav = () => (
  <div className="top-nav" id="home">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center flex-wrap" style={{display:"flex", paddingLeft:"100px"}}>
            {/* Contact Information */}
            <div className="d-flex align-items-center flex-wrap">
              <p className="mb-0 me-3">
                <i className="bx bxs-envelope"></i> info@example.com
              </p>
              <p className="mb-0">
                <i className="bx bxs-phone-call"></i> 123 456-7890
              </p>
            </div>

            {/* Social Icons */}
            <div className="social-icons d-flex align-items-center flex-wrap" style={{paddingRight:"100px"}}>
              <a href="#" className=" mb-0 me-3">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className=" mb-0 me-3">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className=" mb-0 me-3">
                <i className="bx bxl-instagram"></i>
              </a>
              <a  href="#" className=" mb-0 me-3">
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
