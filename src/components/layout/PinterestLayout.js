import React from "react";
import Pinterestcards from "../Cards/Pinterestcards";
import img1 from "../../assests/IMAGES/images/item-cart-01.jpg";
import img2 from "../../assests/IMAGES/images/item-cart-02.jpg";
import img3 from "../../assests/IMAGES/images/item-cart-03.jpg";
import img4 from "../../assests/IMAGES/images/item-cart-04.jpg";

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
            {/* <Row> */}
          <Pinterestcards size="small" />
          <Pinterestcards size="medium"/>
          <Pinterestcards size="large" />
          <Pinterestcards size="small" />
          {/* </Row>
          <Row> */}
          <Pinterestcards size="large" />
          <Pinterestcards size="large" />
          {/* <Pinterestcards size="xs"/> */}
          <Pinterestcards size="medium" />
          <Pinterestcards size="small" />
          {/* </Row> */}
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
