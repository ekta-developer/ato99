import React from "react";
import "./Banner.css";
import img from "../../assests/IMAGES/tshirt.jpg";
const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: "#e4e4e4",
        padding: "2rem",
        height: "500px"
      }}
    >
      <div
        className="banner-content"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="text-section" style={{ maxWidth: "50%" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}>
            Trending Tees: Style That Speaks!
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>
            Discover Your Perfect Fit.
          </p>
          <p style={{ fontSize: "1rem", color: "#666" }}>
            From bold statements to classic designs, our exclusive collection of
            graphic t-shirts brings style and comfort to your everyday look.
            Shop now and elevate your wardrobe!
          </p>
          <button className="btn btn-brand py-3 px-4 me-2">
            Customize Your T-Shirt
          </button>
        </div>
        <div className="image-section" style={{ display: "flex", gap: "1rem" }}>
          <img
            src={img} 
            alt="Graphic T-Shirt 1"
            style={{ width: "300px", borderRadius: "8px" }}
          />
          {/* <img
            src={img} // Replace with the actual path or URL
            alt="Graphic T-Shirt 2"
            style={{ width: "200px", borderRadius: "8px" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
