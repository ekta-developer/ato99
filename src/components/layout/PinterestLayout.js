import React, { useState, useEffect } from "react";
import img1 from "../../assests/IMAGES/gridImages/brunette-woman-red-suit-with-evening-makeup-white.png";
import img2 from "../../assests/IMAGES/gridImages/portrait-young-woman-2000s-fashion-style.png";
import img3 from "../../assests/IMAGES/gridImages/skater-girl-hiding-her-face-from-sun-with-her-head.png";
import Pinterestcards from "../Cards/Pinterestcards";

const PinterestLayout = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      // Disable scrolling on the background when an image is selected
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when the image is closed
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f9f9f9",
          paddingBottom: "28px",
        }}
      >
        <h1 className="display-5 text-center p-3">Our Collection</h1>

        {selectedImage && (
          <div style={styles.centeredImageContainer} onClick={handleClose}>
            <img src={selectedImage} alt="Selected" style={styles.centeredImage} />
          </div>
        )}

        <div style={styles.pin_container}>
          <Pinterestcards size="small" image={img1} onClick={() => handleImageClick(img1)} />
          <Pinterestcards size="medium" image={img3} onClick={() => handleImageClick(img3)} />
          <Pinterestcards size="large" image={img2} onClick={() => handleImageClick(img2)} />
          <Pinterestcards size="small" image={img1} onClick={() => handleImageClick(img1)} />
          <Pinterestcards size="large" image={img2} onClick={() => handleImageClick(img2)} />
          <Pinterestcards size="large" image={img2} onClick={() => handleImageClick(img2)} />
          <Pinterestcards size="medium" image={img3} onClick={() => handleImageClick(img3)} />
          <Pinterestcards size="small" image={img1} onClick={() => handleImageClick(img1)} />
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
  centeredImageContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  centeredImage: {
    maxWidth: "30%",
    maxHeight: "90%",
    borderRadius: "8px",
  },
};

export default PinterestLayout;
