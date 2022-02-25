import React, { useState } from "react";
import Img from "../../../assets/usestate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./usestate.css";
import { Link } from "react-router-dom";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div className="props_box">
        <button onClick={() => setCount(count + 1)}>
          <h2>+</h2>
        </button>
        <p>
          {" "}
          <FontAwesomeIcon icon="check-square" />
          {count}
        </p>
        <button onClick={() => setCount(count - 1)}>
          <h2>-</h2>
        </button>
      </div>
      <div>
        <Link to="/5">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/7">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default UseState;
