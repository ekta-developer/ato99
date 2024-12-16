import React from 'react';
import './Card.css'; // Styles will be added later

const Card = ({ mainHeading, subHeading, content }) => {
  return (
    <div className="card">
      {/* Main Heading */}
      <h2 className="card-main-heading">{mainHeading}</h2>

      {/* Sub Heading */}
      <h4 className="card-sub-heading">{subHeading}</h4>

      {/* Content */}
      <div className="card-content">
        {content}
      </div>
    </div>
  );
};

export default Card;
