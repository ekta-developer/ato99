import React from "react";
import Pinterestcards from "../Cards/Pinterestcards";
import img1 from "../../assests/IMAGES/images/gallery-01.jpg";
import img2 from "../../assests/IMAGES/images/gallery-02.jpg";
import img3 from "../../assests/IMAGES/images/gallery-03.jpg";
import img4 from "../../assests/IMAGES/images/gallery-04.jpg";

const PinterestLayout = () => {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 className="display-5 text-center p-3">Our Collection</h1>
        <div style={styles.pin_container}>
          <Pinterestcards size="small" image={img1} />
          <Pinterestcards size="medium" image={img2} />
          <Pinterestcards size="large" image={img3} />
          <Pinterestcards size="small" image={img4} />
          <Pinterestcards size="large" image={img1} />
          <Pinterestcards size="large" image={img2} />
          <Pinterestcards size="medium" image={img3} />
          <Pinterestcards size="small" image={img4} />
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
