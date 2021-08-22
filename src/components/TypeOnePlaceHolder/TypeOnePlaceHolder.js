import React from "react";
import "./TypeOnePlaceHolder.css";

export const TypeOnePlaceHolder = (props) => {
  return (
    <div className="typeOne-container">
      <p>{props.content}</p>
    </div>
  );
};
