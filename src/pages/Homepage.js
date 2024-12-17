import React from 'react'
import Header from '../components/Header/Header';
import CarouselPart from '../components/Carousels/CarouselPart';
import About from '../components/Section/About';
import CardCarousel from '../components/Carousels/CardCarousel';
import Contact2 from '../components/Section/Contact2';
import WhatsApp from '../components/Social Connect/WhatsApp';
import Footer from '../components/Footer/Footer';
import "../assests/CSS/css/style.css"
const Homepage = () => {
  return (
    <>
    <Header/>
    <CarouselPart/>
    <About/>
    <CardCarousel/>
    <Contact2/>
    <WhatsApp/>
    <Footer/>
    </>
  )
}

export default Homepage;