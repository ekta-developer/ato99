import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Header = () => {
  const headerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "10",
    backgroundColor: "#fff", // Set a background color
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better UI
  };

  return (
    <header style={headerStyle}>
      <nav>
        {/* Top Navigation */}
        <TopNav />
        {/* Bottom Navigation */}
        <BottomNav />
      </nav>
    </header>
  );
};

export default Header;
