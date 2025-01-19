import React from "react";
import {
    BrowserRouter as Switch,
    Route,
    Router,
    BrowserRouter,
    Routes,
  } from "react-router-dom";import Homepage from "../pages/Homepage";
import ProductLoader from "../pages/ProductLoader";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/skeleton" element={<ProductLoader/>}/> */}
        {/* Removed it on 05-01-2025 */}
        {/* <Route path="/product" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
