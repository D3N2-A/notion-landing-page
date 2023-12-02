import React from "react";
import "./index.scss";
import icon from "../../../public/Nav/Notion.svg";

function Nav() {
  return (
    <div className="nav-container">
      <img className="icon" src={icon} alt="Notion" />
    </div>
  );
}

export default Nav;
