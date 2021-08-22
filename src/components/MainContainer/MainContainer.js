import React, { useEffect } from "react";
import "./MainContainer.css";
import { TypeOnePlaceHolder } from "../TypeOnePlaceHolder/TypeOnePlaceHolder";
import { TypeTwoPlaceHolder } from "../TypeTwoPlaceHolder/TypeTwoPlaceHolder";
import { SkillsContainer } from "../Skills/SkillsContainer";

export const MainContainer = () => {
  useEffect(() => {
    const card = document.getElementById("mainContainer");
    function clickRotate(e) {
      if (
        e.target.parentNode.id == "goToSkills" ||
        e.target.id == "goToSkills"
      ) {
        document.getElementById("front-card").style.opacity = "0";
        document.getElementById("back-card").style.opacity = "1";
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

  return (
    <>
      <div id="mainContainer" className="main-container">
        <div id="front-card" className="container-contents front">
          {/* <div className="container-depth"> */}
          <div className="left-content">
            {/* <div className="profile-container">
              <img className="profile" src="./images/profilepic.jpg"></img>
            </div> */}
            <TypeOnePlaceHolder content="Welcome " image={false} />
            <TypeOnePlaceHolder content="I am a Maker." image={false} />
          </div>
          <TypeTwoPlaceHolder
            title="ABOUT ME"
            content="Creative technologist bridging the gap between the physical and digital world.
            Currently focused on humane enhancement technologies(XR), including MR/AR, creating interactive multimedia experiences. Presently working as a Senior Product Engineer at Adloid, developing interactive and immersive experiences for Fortune 500 companies."
          />
          <div className="bottom-content">
            <div className="misc-container">
              <img src="./images/SCET.png"></img>
              <img src="./images/SIH-2017.png"></img>
              <img src="./images/indo_asian_sc.png"></img>
              <img src="./images/MF_2018.png"></img>
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
