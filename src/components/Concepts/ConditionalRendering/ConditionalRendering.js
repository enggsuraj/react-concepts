import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/conditionalrendering.png";

function ConditionalRendering() {
  const [isToggle, setisToggle] = useState(true);

  const handleClick = () => {
    setisToggle(!isToggle);
  };

  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div>{isToggle ? <h2>😃</h2> : <h2>😄</h2>}</div>
      <button onClick={handleClick}>Toggle</button>

      <div>
        <Link to="/8">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/10">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ConditionalRendering;
