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
                  <i className="bx bxs-envelope"></i>
                  <a
                    style={{ color: "white" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@example.com
                  </a>
                </p>
                {/* <p className="mb-0">
                  <i className="bx bxs-phone-call"></i> 123 456-7890
                </p> */}
              </div>

              {/* Social Icons */}
              <div
                className="social-icons d-flex align-items-center flex-wrap"
                style={{ paddingRight: "100px" }}
              >
                <a
                  href="https://www.facebook.com/"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.pinterest.com/"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
