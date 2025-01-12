import React from "react";
import Pinterestcards from "../Cards/Pinterestcards";
import img1 from "../../assests/IMAGES/gridImages/brunette-woman-red-suit-with-evening-makeup-white.png";
import img2 from "../../assests/IMAGES/gridImages/portrait-young-woman-2000s-fashion-style.png"
import img3 from "../../assests/IMAGES/gridImages/skater-girl-hiding-her-face-from-sun-with-her-head.png";
const PinterestLayout = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f9f9f9",
          paddingBottom:"28px"
        }}
      >
        <h1 className="display-5 text-center p-3">Our Collection</h1>
        <div style={styles.pin_container}>
          <Pinterestcards size="small" image={img1} />
          <Pinterestcards size="medium" image={img3} />
          <Pinterestcards size="large" image={img2} />
          <Pinterestcards size="small" image={img1} />
          <Pinterestcards size="large" image={img2} />
          <Pinterestcards size="large" image={img2} />
          <Pinterestcards size="medium" image={img3} />
          <Pinterestcards size="small" image={img1} />
        </div>
      </div>
    </>
  );
};

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "8px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
};
export default PinterestLayout;
