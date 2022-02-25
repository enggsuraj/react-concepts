import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/useref.png";

function UseRefs() {
  const [state, setstate] = useState("😄");

  const ref = useRef(null);

  const handleClick = (param) => {
    if (state === "😄") {
      setstate("😣");
      ref.current.style.backgroundColor = "red";
    } else {
      setstate("😄");
      ref.current.style.backgroundColor = "";
    }
  };

  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div>
        <span ref={ref}>{state}</span>
      </div>{" "}
      <button onClick={handleClick}>State</button>
      <div>
        <Link to="/11">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/13">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default UseRefs;
