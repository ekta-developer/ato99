import React from "react";
import "./Contact2.css"; // To layout multiple cards like the UI in the image
import "../../assests/CSS/css/bootstrap.min.css";
import Card from "../Cards/Card";

function Contact2() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="display-5 mb-4 text-center">Contact Us</h1>
        <div className="row g-5 align-items-center">
          <div className="app-container">
            {/* Address Card */}
            <Card
              mainHeading="Address"
              subHeading="123112, Moscow, Presnensky dist., Klimashkina st., 16"
              content={<button className="how-to-get-btn">How to get</button>}
            />

            {/* Phones Card */}
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

            {/* Work Schedule Card */}
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
