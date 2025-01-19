import React from "react";
import "./style.css";

const Pinterestcards = ({ size, image, onClick }) => {
  return (
    <div
    className={`image ${size}`}
    style={{
      backgroundImage: `url(${image})`,
      paddingBottom: "20px",
    }}
    onClick={onClick} // Add onClick handler here
  >
    {/* Optionally restore the button */}
    {/* <div className="button-container">
      <button>View Details</button>
    </div> */}
  </div>
  );
};
 export default Pinterestcards;