import React from "react";
import Img from "../../../assets/functionalcomponent.png";

import "./functionalcomponent.css";

function FunctionalComponent() {
  return (
    <div>
      <img src={Img} alt="state component"></img>
      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default FunctionalComponent;
