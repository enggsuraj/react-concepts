import React, { Component } from "react";
import img from "../../../assets/propsandevent.png";

import "./propsandevents.css";

export default class PropsAndEvents extends Component {
  constructor(props) {
    super(props);

    // MAIN STATE
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          <img src={img} alt="props and events"></img>
          <div className="props_box">
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              <h2>+</h2>
            </button>
            <p>count = {this.state.count}</p>
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              <h2>-</h2>
            </button>
          </div>
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
