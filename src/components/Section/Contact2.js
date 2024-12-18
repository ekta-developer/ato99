import React from "react";
import "./Contact2.css"; // Ensure this file contains responsive styles
import "../../assests/CSS/css/bootstrap.min.css";
import Card from "../Cards/Card";

function Contact2() {
  return (
    <div className="container-xxl py-5" style={{ marginTop: "100px" }}>
      <div className="container">
        <h1 className="display-5 mb-4 text-center">Contact Us</h1>
        <div className="row g-4">
          {/* Address Card */}
          <div className="col-md-4 col-sm-6">
            <Card
              mainHeading="Address"
              subHeading="123112, Moscow, Presnensky dist., Klimashkina st., 16"
              content={<button className="how-to-get-btn">How to get</button>}
            />
          </div>

          {/* Phones Card */}
          <div className="col-md-4 col-sm-6">
            <Card
              mainHeading="Phones"
              subHeading=""
              content={
                <div className="phones-list">
                  <p>
                    <strong>Central sales office</strong> <br /> +7 800
                    545-45-15
                  </p>
                  <p>
                    <strong>Reception</strong> <br /> +7 495 257-35-22
                  </p>
                  <p>
                    <strong>PR</strong> <br /> +7 495 345-44-32
                  </p>
                </div>
              }
            />
          </div>

          {/* Work Schedule Card */}
          <div className="col-md-4 col-sm-12">
            <Card
              mainHeading="Work Schedule"
              subHeading=""
              content={
                <div className="work-schedule">
                  <p>
                    mon-sun: <br /> <span>10:00 — 22:00</span>
                  </p>
                  <p>
                    mon-sun: <br />
                    <span>10:00 — 22:00</span>
                  </p>
                  <p>
                    mon-fri: <br /> <span>10:00 — 22:00</span>
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
