import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselPart from "../src/components/Carousels/CarouselPart"
import "../src/assests/CSS/css/style.css"
import About from "./components/Section/About";
import Footer from "./components/Footer/Footer";
import CardCarousel from "./components/Carousels/CardCarousel";
function App() {
  return (
    <>
      <Header />
      <CarouselPart/>
      <About/>
      <CardCarousel/>
      <Footer/>
    </>
  );
}

export default App;
