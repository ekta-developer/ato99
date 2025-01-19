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
    backgroundColor:"#141414",
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ta99shop@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ta99shop@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div
                className="social-icons d-flex align-items-center flex-wrap"
                style={{ paddingRight: "100px" }}
              >
                <a
                  href="https://www.facebook.com/share/1GS1jgQUBJ/"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/ta99store.com_/profilecard/?igsh=MTkxZW04cjVjbW9ubQ=="
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Vaxm71pL2AU6Ccm8yO0e"
                  className="mb-0 me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-whatsapp"></i>
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
