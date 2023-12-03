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
  const col1 = [
    {
      title: "Product",
      content: ["Wikis", "Projects", "Docs", "Notion AI", "What’s new"],
    },
    {
      title: "Solutions",
      content: [
        "Enterprise",
        "Small business",
        "Personal use",
        "Remote work",
        "Startups",
        "Education",
        "Nonprofits",
        "Engineering",
        "Product",
        "Design",
        "Managers",
      ],
    },
  ];

  const col2 = [
    {
      title: "Download",
      content: ["iOS & Android", "Mac & Windows", "Web Clipper"],
    },
    {
      title: "Build",
      content: [
        "Integrations",
        "Templates",
        "API docs",
        "Guides & tutorials",
        "Hire a consultant",
        "Become an affiliate",
      ],
    },
    {
      title: "Learn",
      content: [
        "Customer stories",
        "Help center",
        "Webinars",
        "Blog",
        "Community",
      ],
    },
  ];

  const col3 = [
    {
      title: "Get Started",
      content: [
        "Switch from Confluence",
        "Switch from Asana",
        "Switch from Evernote",
        "Compare vs Monday",
        "Compare vs Clickup",
        "Compare vs Jira",
      ],
    },
    {
      title: "Resources",
      content: [
        "Pricing",
        "About us",
        "Careers",
        "Media kit",
        "Email us",
        "Security",
        "Cookie settings",
        "Terms & privacy",
        "California Privacy Notice",
        "Status",
      ],
    },
  ];

  const footerData = [col1, col2, col3];
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
        <div className="glossary">
          <div className="block-container">
            {footerData.map((col, index) => {
              return (
                <div className="column" key={index}>
                  {col.map((block, index) => {
                    return (
                      <div className="block" key={index}>
                        <div className="title">{block.title}</div>
                        {block.content.map((el, index) => {
                          return (
                            <div className="link" key={index}>
                              {el}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
