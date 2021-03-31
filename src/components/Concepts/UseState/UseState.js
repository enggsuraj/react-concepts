import React, { useState } from "react";
import Img from "../../../assets/usestate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./usestate.css";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={Img} alt="state component"></img>
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
      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default UseState;
