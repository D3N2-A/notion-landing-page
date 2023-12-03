import { useState } from "react";
import "./App.css";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Subhero from "./Components/Hero/Subhero";
import footer from "../public/Footer/footer.webp";
import Free from "./Components/TextSections/Free";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className="sub">
        <Hero />
        <Subhero />
        <div className="spacer"></div>
        <Free />
        <img src={footer} alt="" className="footer-img" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
