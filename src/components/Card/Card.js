import React, { Component } from "react";
import "./Card.css";
import { RiRefreshLine } from "react-icons/ri";

class Card extends Component {
  state = {
    refresh: false,
  };

  refreshContent = () => {
    this.setState({ refresh: true });
    setTimeout(() => {
      this.setState({ refresh: false });
    }, 1000);
  };
  render = () => {
    return (
      <div className="cardHolder">
        <div className="card">
          <p>
            I am ready to face any challenge that is foolish enough to face me.
          </p>
          <RiRefreshLine
            className={
              this.state.refresh ? "refreshIcon refresh-start" : "refreshIcon"
            }
            src="refresh.svg"
            onClick={() => {
              this.refreshContent();
            }}
          />
        </div>
      </div>
    );
  };
}

export default Card;
