import React from "react";
import "./SkillsContainer.css";

export const SkillsContainer = () => {
  return (
    <div className="skills-container">
      <ul>
        <li className="skill">
          <div>
            <h2>3 Projects</h2>
            <img src="./logos/aws.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>4 Projects</h2>
            <img src="./logos/babylon-js.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>1 Project</h2>
            <img src="./logos/three-js.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>3 Projects</h2>
            <img src="./logos/unity.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src="./logos/htmlcssjs.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src="./logos/react.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src="./logos/nodejs.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src="./logos/webpack.png" />
          </div>
        </li>
        <li className="skill">
          <div>
            <h2>5 Projects</h2>
            <img src="./logos/parcel.png" />
          </div>
        </li>
      </ul>
      <div id="returnSkills" className="return">
        <p>RETURN</p>
      </div>
    </div>
  );
};
