import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function UseRefs() {
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
      <div>
        <h2 ref={ref}>{state}</h2>
      </div>{" "}
      <button onClick={handleClick}>State</button>
    </div>
  );
}`;

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
      <h2>UseRefs</h2>
      <div>
        <h2 ref={ref}>{state}</h2>
      </div>{" "}
      <button onClick={handleClick}>State</button>
      <div className="navigation">
        <Link to="/useeffect">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/usememo">
          <button>Next</button>
        </Link>
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
    </div>
  );
}

export default UseRefs;
