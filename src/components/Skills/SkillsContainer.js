import React from "react";
import "./SkillsContainer.css";

const aws = require("../../logos/aws.png").default;
const babylon_js = require("../../logos/babylon-js.png").default;
const three_js = require("../../logos/three-js.png").default;
const unity = require("../../logos/unity.png").default;
const htmlcssjs = require("../../logos/htmlcssjs.png").default;
const react = require("../../logos/react.png").default;
const nodejs = require("../../logos/nodejs.png").default;
const webpack = require("../../logos/webpack.png").default;
const parcel = require("../../logos/parcel.png").default;

export const SkillsContainer = () => {
  return (
    <div className="skills-container">
      <ul>
        <li className="skill">
          <div>
            <h2>3 Projects</h2>
            <img src={aws} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>4 Projects</h2>
            <img src={babylon_js} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>1 Project</h2>
            <img src={three_js} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>3 Projects</h2>
            <img src={unity} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src={htmlcssjs} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src={react} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src={nodejs} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src={webpack} />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src={parcel} />
          </div>
        </li>
      </ul>
      <div id="returnSkills" className="return">
        <p>RETURN</p>
      </div>
    </div>
  );
};
