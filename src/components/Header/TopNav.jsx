import React, { useEffect, useState } from "react";
import "../../assests/CSS/css/bootstrap.min.css";
const TopNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    paddingLeft:
      windowWidth > 768 ? "100px" : windowWidth > 480 ? "50px" : "20px",
  };
  return (
    <>
      <div className="top-nav" id="home">
        <div className="row">
          <div className="col">
            <div
              className="d-flex justify-content-between align-items-center flex-wrap"
              style={containerStyle}
            >
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
              <div
                className="social-icons d-flex align-items-center flex-wrap"
                style={{ paddingRight: "100px" }}
              >
                <a href="#" className=" mb-0 me-3">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className=" mb-0 me-3">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className=" mb-0 me-3">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className=" mb-0 me-3">
                  <i className="bx bxl-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
