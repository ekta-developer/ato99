import React from "react";
import Header from "../components/Header/Header";
import CarouselPart from "../components/Carousels/CarouselPart";
import About from "../components/Section/About";
import CardCarousel from "../components/Carousels/CardCarousel";
import Contact2 from "../components/Section/Contact2";
import WhatsApp from "../components/Social Connect/WhatsApp";
import Footer from "../components/Footer/Footer";
import "../assests/CSS/css/style.css";
import PinterestLayout from "../components/layout/PinterestLayout";
const Homepage = () => {
  return (
    <>
      <section id="home">
        <Header />
        <CarouselPart />
      </section>
      <div id="about">
        <About />
      </div>
      <div id="product">
        {/* removed it on 05-01-2025 */}
        {/* <CardCarousel /> */}
        <PinterestLayout cardsData/>
      </div>
      <div id="contact">
        <Contact2 />
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
};

export default Homepage;
