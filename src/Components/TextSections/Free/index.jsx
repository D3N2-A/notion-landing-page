import React from "react";
import "./free.scss";
import Button from "../../UI/Button/Button";

function Free() {
  return (
    <div className="free-container">
      <h1>Get started for free</h1>
      <h3>Play around with it first. Pay and add your team later.</h3>
      <Button text={"Try Notion free"} color={"black"} />
    </div>
  );
}

export default Free;
