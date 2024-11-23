import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Header = () => {
  return (
    <>
      <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="70">
        {/* Top Navigation */}
        <TopNav />

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </>
  );
};

export default Header;
