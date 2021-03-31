import React, { useRef, useState } from "react";
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
      <img src={Img} alt="state component"></img>
      <div>
        <span ref={ref}>{state}</span>
      </div>{" "}
      <button onClick={handleClick}>State</button>
      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default UseRefs;
