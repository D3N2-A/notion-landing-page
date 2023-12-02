import { useState } from "react";
import "./App.css";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Subhero from "./Components/Hero/Subhero";

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className="sub">
        <Hero />
        <Subhero />
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default App;
