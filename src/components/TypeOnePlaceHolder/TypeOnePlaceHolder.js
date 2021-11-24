import React from "react";
import "./TypeOnePlaceHolder.css";

export const TypeOnePlaceHolder = (props) => {
  return (
    <div className="typeOne-container">
      <p>{props.content}</p>
      {props.image ? <img src={props.source}></img> : null}
    </div>
  );
};
