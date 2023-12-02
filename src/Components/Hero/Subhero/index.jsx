import React from "react";
import "./subhero.scss";
import sparkles from "../../../../public/Hero/Subhero/sparkles.svg";

function Subhero() {
  const tiles = [
    {
      title: "AI",
      icon: sparkles,
      color: "#9d34da",
      description: "Ask literally anything. Notion will answer.",
    },
    {
      title: "Wikis",
      icon: sparkles,
      color: "#ea4e43",
      description: "Centralize your knowledge. No more hunting for answers.",
    },
    {
      title: "Projects",
      icon: sparkles,
      color: "#0a85d1",
      description: "Manage complex projects without the chaos.",
    },
    {
      title: "Docs",
      icon: sparkles,
      color: "#996600",
      description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    },
  ];
  return (
    <div className="subhero-container">
      <div className="top">
        {tiles.map((tile, index) => {
          return (
            <>
              <div className="tile">
                <div className="top">
                  <img src={tile.icon} alt="" />
                  <h1>{tile.title}</h1>
                </div>
                <div className="bottom">{tile.description}</div>
                <div className="click" style={{ color: tile.color }}>
                  Learn more →
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Subhero;
