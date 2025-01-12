import React from "react";
import "./style.css";

const Pinterestcards = ({ size, image }) => {
  return (
    <div
      className={`image ${size}`}
      style={{
        backgroundImage: `url(${image})`,
        paddingBottom: "20px"
      }}
    >
      {/* <div className="button-container">
        <button>View Details</button>
      </div> */}
    </div>
  );
};

export default Pinterestcards;
