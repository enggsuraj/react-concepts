import React, { useState } from "react";
import Img from "../../../assets/conditionalrendering.png";

function ConditionalRendering() {
  const [isToggle, setisToggle] = useState(true);

  const handleClick = () => {
    setisToggle(!isToggle);
  };

  return (
    <div>
      <img src={Img} alt="state component"></img>
      <div>{isToggle ? <h2>😃</h2> : <h2>😄</h2>}</div>
      <button onClick={handleClick}>Toggle</button>

      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default ConditionalRendering;
