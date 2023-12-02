import React from "react";
import "./hero.scss";
import Button from "../UI/Button/Button";
import hero from "../../../public/Hero/home-hero.png";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Write, plan, share. With AI at your side.</h1>
      <h3>
        Notion is the connected workspace where better, faster work happens.
      </h3>
      <Button text={"Get Notion free →"} color={"black"} />
      <img src={hero} alt="" />
    </div>
  );
}

export default Hero;
