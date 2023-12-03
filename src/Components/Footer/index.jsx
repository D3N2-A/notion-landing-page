import React from "react";
import icon from "../../../public/Nav/Notion.svg";
import "./footer.scss";

import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { CiGlobe } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sub">
        <div className="socials">
          <img className="icon" src={icon} alt="Notion" />
          <div className="media">
            <span data-color="black">
              <FaInstagram />
            </span>
            <span data-color="#1DA1F2">
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>

          <div>
            <select name="" id="lang">
              <option value="">English</option>
            </select>
          </div>
        </div>
        <div className="glossary">gloass</div>
      </div>
    </div>
  );
}

export default Footer;
