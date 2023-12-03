import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Subhero from "./Components/Hero/Subhero";
import footer from "../public/Footer/footer.webp";
import Free from "./Components/TextSections/Free";
import Footer from "./Components/Footer";
import match from "../public/Testimonial/match.png";
import Testimonial from "./Components/UI/Testimonial";

function App() {
  const [showBorder, setShowBorder] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowBorder(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="page-container">
      <Nav ref={ref} showBorder={showBorder} />
      <div ref={ref}></div>
      <div className="sub">
        <Hero />
        <Subhero />
        <div className="spacer2"></div>
        <Testimonial
          text={
            "Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."
          }
          icon={match}
          author={"Rahim Makani"}
          designation={"Director of Product, Matchgroup"}
        />
        <div className="spacer2"></div>
        <Free />
        <img src={footer} alt="" className="footer-img" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
