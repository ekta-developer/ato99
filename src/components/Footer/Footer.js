import React from "react";
import img from "../../assests/IMAGES/img/unnamed.png";
const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative" style={{backgroundColor:"#9E9E9E"}}>
        <div className="container footer-top d-flex justify-content-center">
          <div className="align-content-center">
            <img
              src={img}
              style={{ width: "127px", height: "70px" }}
              alt="Brand"
            ></img>
          </div>
        </div>

        <div className="container footer-top d-flex justify-content-center text-dark">
          <div className="align-content-center text-center">
            <p>
              At TA99store.com, we believe fashion is more than clothing – it’s
              a statement, a feeling, and a way of life. Our mission is to
              empower individuals to express themselves with confidence, no
              matter the occasion. With a focus on quality, style, and
              sustainability, we curate collections that make looking good
              effortless.
            </p>
          </div>
        </div>

        {/* Bold Line */}
        <div className="container d-flex justify-content-center">
          <div
            style={{
              height: "2px",
              backgroundColor: "black",
              width: "113%",
              margin: "20px 0",
            }}
          ></div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span className="text-dark">Copyright</span> <strong className="sitename text-dark">App</strong>{" "}
            <span  className="text-dark">All Rights Reserved</span>
          </p>
          <div className="credits text-dark">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
