import React from "react";
import "../../assests/CSS/css/bootstrap.min.css";
import img from "../../assests/IMAGES/img/unnamed.png";
import { useNavigate } from "react-router-dom";
const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
      style={{ width: "100%" }}
    >
      <div className="container">
        <a className="navbar-brand" href="">
          <img
            src={img}
            style={{ width: "127px", height: "70px" }}
            alt="Brand"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Collection
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
          <a
            href="#contact"
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            className="btn btn-brand ms-lg-3"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
