import React, { useState } from "react";
import "./index.scss";
import icon from "../../../public/Nav/Notion.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../UI/Button/Button";

function Nav() {
  //Nav Elements
  const nav = [
    {
      label: "Products",
    },
    {
      label: "Download",
    },
    {
      label: "Solutions",
    },
    {
      label: "Resources",
    },
  ];

  //Active Hovered Nav element
  const [activeNav, setActiveNav] = useState({ index: null, label: null });

  const tiles = [
    {
      title: "Wikis",
      icon: "book",
      color: "#ea4e43",
      background: "#fce9e8",
      description: "Centralize your knowledge",
    },
    {
      title: "Projects",
      icon: "project",
      color: "#0a85d1",
      background: "#e2ecf3",
      description: "For Every team and size",
    },
    {
      title: "Docs",
      icon: "doc",
      color: "#996600",
      background: "#fff6d6",
      description: "Simple & powerful",
    },
    {
      title: "AI",
      icon: "sparkles",
      color: "#9d34da",
      background: "#f0e1f9",
      description: "Integrated AI assistant",
    },
  ];
  return (
    <div
      className="nav-container"
      onMouseLeave={() => {
        setActiveNav({ index: null, label: null });
      }}
    >
      <img className="icon" src={icon} alt="Notion" />
      <div className="sub-nav">
        <div className="dropdown-container">
          {nav.map((item, index) => {
            return (
              <div
                className="dropdown"
                key={index}
                onMouseEnter={() => {
                  setActiveNav({ index: index, label: item.label });
                }}
              >
                <div className="label">
                  {item.label}
                  {activeNav.index === index ? (
                    <IoIosArrowUp size={12} />
                  ) : (
                    <IoIosArrowDown size={12} />
                  )}{" "}
                </div>
              </div>
            );
          })}
          <div
            className="popup"
            style={{
              marginLeft: `${
                activeNav.index === 0
                  ? "120px"
                  : activeNav.index === 1
                  ? "212px"
                  : activeNav.index === 3
                  ? "420px"
                  : "0px"
              }`,
            }}
          >
            {activeNav.label === "Products" && (
              <>
                <div className="first">
                  {tiles.map((tile, index) => {
                    return (
                      <div className="nav-tile" key={index}>
                        <div className="icon">
                          {tile.icon === "sparkles" && (
                            <svg
                              className="sparkles"
                              viewBox="0 0 24 23"
                              style={{
                                width: "20px",
                                height: "20px",
                                WebkitFlexShrink: "0",
                                MsFlexShrink: "0",
                                fill: `${tile.color}`,
                                flexShrink: "0",
                              }}
                              fill="inherit"
                              display="block"
                            >
                              <path d="M10.456 5.728c.455-.157.455-.437 0-.612L7.99 4.17c-.438-.158-.945-.665-1.12-1.12L5.924.583c-.158-.455-.438-.455-.613 0l-.945 2.468c-.157.437-.665.945-1.12 1.12L.78 5.116c-.455.157-.455.437 0 .612l2.467.945c.438.158.945.665 1.12 1.12l.945 2.468c.158.455.438.455.613 0l.945-2.468c.157-.437.665-.945 1.12-1.12l2.467-.945zM22.479 14.373c1.4-.35 1.4-.927 0-1.277l-3.098-.77c-1.4-.35-2.835-1.785-3.185-3.185l-.77-3.098c-.35-1.4-.927-1.4-1.277 0l-.77 3.098c-.35 1.4-1.785 2.835-3.185 3.185l-3.098.77c-1.4.35-1.4.927 0 1.277l3.098.77c1.4.35 2.835 1.785 3.185 3.185l.77 3.098c.35 1.4.927 1.4 1.277 0l.77-3.098c.35-1.4 1.785-2.835 3.185-3.185l3.098-.77z"></path>
                            </svg>
                          )}
                          {tile.icon === "book" && (
                            <svg
                              className="bookOpen"
                              viewBox="0 0 48 48"
                              style={{
                                width: "20px",
                                height: "20px",
                                WebkitFlexShrink: "0",
                                MsFlexShrink: "0",
                                flexShrink: "0",
                                fill: `rgb(234, 78, 67)`,
                              }}
                              display="block"
                            >
                              <path d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42zM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5z"></path>
                              <path d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06zM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2z"></path>
                            </svg>
                          )}
                          {tile.icon === "project" && (
                            <svg
                              className="target"
                              viewBox="0 0 49 49"
                              style={{
                                width: "20px",
                                height: "20px",
                                WebkitFlexShrink: "0",
                                MsFlexShrink: "0",
                                flexShrink: "0",
                                fill: "rgb(10, 133, 209)",
                              }}
                              display="block"
                            >
                              <path
                                d="M48.204 9.157l-6.156 6.247-.03-.06c-3.032 3.092-5.299 3.797-9.709 3.337l-3.154 3.185c1.103 2.021.827 4.625-.858 6.34-2.051 2.113-5.45 2.113-7.564.06s-2.144-5.45-.061-7.563c1.684-1.715 4.257-2.022 6.309-.95l3.154-3.185c-.52-4.41.122-6.676 3.154-9.77L39.445.552l1.715 7.044zm-14.547 12.77h.827v.062a13.87 13.87 0 003.093-.337c.214.95.337 1.899.337 2.91 0 7.41-6.003 13.413-13.414 13.413s-13.414-6.003-13.414-13.414S17.09 11.147 24.5 11.147c.919 0 1.838.092 2.695.276-.245 1.194-.337 2.48-.245 3.92-.796-.214-1.592-.367-2.45-.367-5.267 0-9.555 4.287-9.555 9.555s4.288 9.555 9.555 9.555 9.555-4.288 9.555-9.555c0-.92-.153-1.777-.398-2.603zm8.483-2.541c.704-.521 1.378-1.133 2.083-1.838l1.592-1.623c1.041 2.664 1.654 5.543 1.654 8.575 0 12.679-10.29 22.969-22.969 22.969-12.679 0-22.969-10.29-22.969-22.969 0-12.679 10.29-22.969 22.969-22.969 2.879 0 5.635.552 8.177 1.532l-1.562 1.592a18.453 18.453 0 00-1.807 2.113c-1.531-.398-3.154-.643-4.808-.643-10.137 0-18.375 8.238-18.375 18.375S14.363 42.875 24.5 42.875 42.875 34.637 42.875 24.5c0-1.776-.276-3.491-.735-5.114z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                          {tile.icon === "doc" && (
                            <svg
                              className="doc"
                              viewBox="0 0 49 49"
                              style={{
                                width: "20px",
                                height: "20px",
                                WebkitFlexShrink: "0",
                                MsFlexShrink: "0",
                                flexShrink: "0",
                                fill: "rgb(250, 167, 0)",
                              }}
                              display="block"
                            >
                              <path d="M40.22 14.512l-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21zm-13.11-6.81l10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26z"></path>
                              <path
                                stroke="rgb(250, 167, 0)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.824"
                                d="M17.75 27.232h13.5m-13.5 7.17h13.5"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <div className="bottom">
                          <h1>{tile.title}</h1>
                          <p>{tile.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="divider" style={{ height: "200px" }}></div>
                <div className="second">
                  <div>
                    <h1>Template gallery</h1>
                    <p>Setups to get you started</p>
                  </div>
                  <div>
                    <h1>Customer stories</h1>
                    <p>See how teams use notion</p>
                  </div>
                  <div>
                    <h1>Connections</h1>
                    <p>Connect your tools to notion</p>
                  </div>
                </div>
              </>
            )}
            {activeNav.index === 1 ? (
              <div className="second">
                <div>
                  <h1>iOS & Android</h1>
                </div>
                <div>
                  <h1>Mac & Windows</h1>
                </div>
                <div>
                  <h1>Web Clipper</h1>
                </div>
              </div>
            ) : null}
            {activeNav.index === 3 ? (
              <div className="second">
                <div>
                  <h1>Blog</h1>
                </div>
                <div>
                  <h1>Guidelines</h1>
                </div>
                <div>
                  <h1>Webinar</h1>
                </div>
                <div>
                  <h1>API Docs</h1>
                </div>
                <div>
                  <h1>Commnity</h1>
                </div>
                <div>
                  <h1>Hire a consultant</h1>
                </div>
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <div className="label">Pricing</div>
          </div>
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
            <div className="label">Request a demo</div>
          </div>
          <div className="divider"></div>
          <div className="dropdown">
            <div className="label">Log in</div>
          </div>
          <Button text={"Get Notion Free"} color={"black"} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
