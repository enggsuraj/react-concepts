import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./state.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `
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
          <p>this.state.emoji = {this.state.name}</p>
        </div>
      </div>
    );
  }
}`;

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
      <div className="state wrapper">
        <div>
          <p>this.state.emoji = {this.state.name}</p>
        </div>
        <div>
          <Link to="/classcomponent">
            <button>Previous</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/propsandevents">
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
    );
  }
}
