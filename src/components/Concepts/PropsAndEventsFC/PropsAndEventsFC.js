import React from "react";
import Img from "../../../assets/functionalcomponent.png";

function PropsAndEventsFC() {
  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default PropsAndEventsFC;
