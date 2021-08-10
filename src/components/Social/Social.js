import React, { Component } from "react";
import "./Social.css";

class Social extends Component {
  state = {};

  render = () => {
    return <button className="threeDbutton">{this.props.name}</button>;
  };
}

export default Social;
