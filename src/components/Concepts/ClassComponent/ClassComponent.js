import React, { Component } from "react";
import cc from "../../../assets/cc.png";
import "./classcomponent.css";
import { Link } from "react-router-dom";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="classcomponent">
        <img src={cc} alt="class component"></img>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/2">
            <button>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}
