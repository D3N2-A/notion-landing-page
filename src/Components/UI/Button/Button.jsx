import React from "react";
import "./button.scss";

function Button({ text, color }) {
  return (
    <button style={{ background: `${color}`, color: `ButtonHighlight` }}>
      {text}
    </button>
  );
}

export default Button;
