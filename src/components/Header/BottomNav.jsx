import React from "react";
import "../../assests/CSS/css/bootstrap.min.css"
const BottomNav = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        tA99Shop<span className="dot">.</span>com
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
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">
              Reviews
            </a>
          </li>
        </ul>
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-brand ms-lg-3"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
  </div>
);

export default BottomNav;
