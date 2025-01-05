import React from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import image from "../../assests/IMAGES/images/gallery-01.jpg";
const Pinterestcards = ({ size }) => {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[size],
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover overlay */}
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h5 style={styles.name}>{name}</h5>
          <div style={styles.actions}>
            <button style={styles.button}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button style={styles.button}>
              <FaEye /> View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    height: "200px", // Default height
  },
  xs: {
    gridRowEnd: "span 15",
    height: "150px",
  },
  small: {
    gridRowEnd: "span 28",
    height: "200px",
  },
  medium: {
    gridRowEnd: "span 33",
    height: "250px",
  },
  large: {
    gridRowEnd: "span 50",
    height: "300px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s ease",
  },
  content: {
    color: "#fff",
    textAlign: "center",
  },
  name: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    color: "hotpink",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "hotpink",
    color: "black",
  },
};

// Hover effects
styles.card[":hover"] = {
  transform: "scale(1.05)",
};
styles.overlay[":hover"] = {
  opacity: 1,
};

export default Pinterestcards;
