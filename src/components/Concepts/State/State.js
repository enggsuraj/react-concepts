import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <div>
          <Link to="/1">
            <button>Previous</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/3">
            <button>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}
