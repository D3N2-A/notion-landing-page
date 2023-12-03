import React from "react";
import "./testimonial.scss";

function Testimonial({ text, author, icon, designation }) {
  return (
    <figure>
      <blockquote>
        <span>{text}</span>
      </blockquote>
      <div className="info">
        <img src={icon} alt="" />
        <div>
          <div className="author">{author}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </figure>
  );
}

export default Testimonial;
