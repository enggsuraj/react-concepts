import React, { Component } from "react";
import stateImg from "../../../assets/state.png";

import "./state.css";

export default class State extends Component {
  constructor(props) {
    super(props);

    // MAIN STATE
    this.state = {
      name: "😃",
    };
  }

  render() {
    return (
      <div className="state">
        <div>
          <img src={stateImg} alt="state component"></img>
          <p>this.state.emoji = {this.state.name}</p>
        </div>
        <div className="btn">
          <a href="/">
            <button>Home</button>
          </a>
        </div>
      </div>
    );
  }
}
