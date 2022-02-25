import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <img
            className="component_image"
            src={img}
            alt="props and events"
          ></img>
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
        <div>
          <Link to="/2">
            <button>Previous</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/4">
            <button>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}
