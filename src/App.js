import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselPart from "../src/components/Carousels/CarouselPart"
import "../src/assests/CSS/css/style.css"
import About from "./components/Section/About";
import Footer from "./components/Footer/Footer";
import CardCarousel from "./components/Carousels/CardCarousel";
import Contact from "./components/Section/Contact";
import WhatsApp from "./components/Social Connect/WhatsApp"
import Contact2 from "./components/Section/Contact2";
function App() {
  return (
    <>
      <Header />
      <CarouselPart/>
      <About/>
      {/* <Contact/> */}
      <CardCarousel/>
      <Contact2/>
      <WhatsApp/>
      <Footer/>
    </>
  );
}

export default App;
