import React from "react";
import "./TypeTwoPlaceHolder.css";

export const TypeTwoPlaceHolder = (props) => {
  return (
    <div className="typeTwo-container">
      <div className="container-heading">
        <p>{props.title}</p>
      </div>
      <div className="container-content">{props.content}</div>
    </div>
  );
};
