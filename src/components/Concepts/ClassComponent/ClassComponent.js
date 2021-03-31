import React, { Component } from "react";
import cc from "../../../assets/cc.png";
import "./classcomponent.css";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="classcomponent">
        <img src={cc} alt="class component"></img>
        <div>
          <a href="/">
            <button>Home</button>
          </a>
        </div>
      </div>
    );
  }
}
