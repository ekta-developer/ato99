import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselPart from "../src/components/Carousels/CarouselPart"
import "../src/assests/CSS/css/style.css"
import About from "./components/Section/About";
import Footer from "./components/Footer/Footer";
import CardCarousel from "./components/Carousels/CardCarousel";
import Contact from "./components/Section/Contact";
function App() {
  return (
    <>
      <Header />
      <CarouselPart/>
      <About/>
      <Contact/>
      <CardCarousel/>
      <Footer/>
    </>
  );
}

export default App;
