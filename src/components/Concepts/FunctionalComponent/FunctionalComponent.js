import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/functionalcomponent.png";

import "./functionalcomponent.css";

function FunctionalComponent() {
  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div>
        <Link to="/4">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/6">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FunctionalComponent;
