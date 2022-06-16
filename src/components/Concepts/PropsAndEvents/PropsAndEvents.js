import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/propsandevent.png";

import "./propsandevents.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `
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
        </div>
      );
    }
  }`;

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
          <h2>Props & Events</h2>
          <div className="props_box">
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              +
            </button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <p>count = {this.state.count}</p>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              -
            </button>
          </div>
          <div className="navigation">
            <Link to="/thisstate">
              <button>Previous</button>
            </Link>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/functionalcomponents">
              <button>Next</button>
            </Link>
          </div>
          <SyntaxHighlighter
            class="codesyntax"
            language="javascript"
            style={tomorrowNightEighties}
          >
            {codeString}
          </SyntaxHighlighter>{" "}
        </div>
      </div>
    );
  }
}
