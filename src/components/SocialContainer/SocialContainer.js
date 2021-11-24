import React from "react";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import "./SocialContainer.css";

export const SocialContainer = () => {
  const openInNewTab = (href) => {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: href,
    }).click();
  };
  return (
    <div className="socialContainer">
      <div className="socialIcon">
        <FaLinkedinIn
          onClick={() => openInNewTab("https://linkedin.com/in/sidharthsuresh")}
        />
      </div>
      <div className="socialIcon">
        <a href="./1.jpeg" download />
        <FaFileDownload />
      </div>
      <div className="socialIcon">
        <FaGithub onClick={() => openInNewTab("https://github.com/Hiccup99")} />
      </div>
    </div>
  );
};
