import React, { useEffect } from "react";
import "./MainContainer.css";
import { TypeOnePlaceHolder } from "../TypeOnePlaceHolder/TypeOnePlaceHolder";
import { TypeTwoPlaceHolder } from "../TypeTwoPlaceHolder/TypeTwoPlaceHolder";
import { SkillsContainer } from "../Skills/SkillsContainer";

const indo_asian_sc = require("../../images/indo_asian_sc.png").default;
const maker = require("../../images/maker.png").default;
const MF_2018 = require("../../images/MF_2018.png").default;
const refresh = require("../../images/refresh.svg").default;
const SCET = require("../../images/SCET.png").default;
const SIH_2017 = require("../../images/SIH-2017.png").default;

export const MainContainer = () => {
  useEffect(() => {
    const card = document.getElementById("mainContainer");
    function clickRotate(e) {
      if (
        e.target.parentNode.id == "goToSkills" ||
        e.target.id == "goToSkills"
      ) {
        document.getElementById("front-card").style.opacity = "0";
        document.getElementById("back-card").style.opacity = "0.9";
      } else {
        document.getElementById("front-card").style.opacity = "1";
        document.getElementById("back-card").style.opacity = "0";
      }
      card.classList.toggle("rotated");
    }
    document
      .getElementById("returnSkills")
      .addEventListener("click", clickRotate);
    document
      .getElementById("goToSkills")
      .addEventListener("click", clickRotate);
  }, []);

  const openInNewTab = (href) => {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: href,
    }).click();
  };

  return (
    <>
      <div id="mainContainer" className="main-container">
        <div id="front-card" className="container-contents front">
          <div className="left-content">
            <TypeOnePlaceHolder
              content="Welcome to Sidharth's Portfolio :)"
              image={false}
            />
            <TypeOnePlaceHolder
              content="I am a Maker."
              image={true}
              source={maker}
            />
          </div>
          <TypeTwoPlaceHolder
            title="ABOUT ME"
            content="Creative technologist bridging the gap between the physical and digital world.
            Currently exploring humane enhancement technologies(XR) and creating interactive multimedia experiences. Working as a Senior Product Engineer at Adloid, developing immersive experiences for Fortune 500 companies."
          />
          <div className="bottom-content">
            <div className="misc-container">
              <div className="misc-item">
                <img src={SCET}></img>
                <p>Semester Abroad</p>
              </div>
              <div className="misc-item">
                <img
                  className="pointer"
                  src={MF_2018}
                  onClick={() =>
                    openInNewTab("https://makerfaire.com/maker/entry/65429/")
                  }
                ></img>
                <p>Project Exhibit</p>
              </div>
              <div className="misc-item">
                <img
                  className="pointer"
                  src={SIH_2017}
                  onClick={() =>
                    openInNewTab("https://www.youtube.com/watch?v=XP-QVg8O-Oo")
                  }
                ></img>
                <p>Winner</p>
              </div>
              <div className="misc-item">
                <img src={indo_asian_sc}></img>
                <p>Winner</p>
              </div>
            </div>
            <div id="goToSkills" className="explore-skills">
              <p>SKILLS</p>
              <img src="https://img.icons8.com/glyph-neue/64/000000/arrow.png" />
            </div>
          </div>
        </div>
        {/* </div> */}
        <div id="back-card" className="container-contents back">
          <div className="container-depth">
            <SkillsContainer></SkillsContainer>
          </div>
        </div>
      </div>
    </>
  );
};
