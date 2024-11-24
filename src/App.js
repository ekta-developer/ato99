import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselPart from "../src/components/Section/CarouselPart"
import "../src/assests/CSS/css/style.css"
import About from "./components/Section/About";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <CarouselPart/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
