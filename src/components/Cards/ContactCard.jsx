import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing specific icons
import "./ContactCard.css"; // Styles

const cardData = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "B-7 / 03 Asra Enclave, Sector 18, Vrindavan Township,226301",
    style: "location",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    content: "ta99shop@gmail.com",
    style: "email",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "7355996431",
    style: "phone",
  },
];

const DynamicCard = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container ">
        <h5 className="mb-4 text-center">Contact Us</h5>
        <h1 className="display-5 mb-4 text-center">
          <b>Let's Get In Touch</b>
        </h1>
        <div className="card-container">
          {cardData.map((card, index) => (
            <div key={index} className={`card ${card.style}`}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-content">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
