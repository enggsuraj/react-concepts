import React, { useEffect, useState } from "react";
import "./UseCallback.css";

import Img from "../../../assets/useeffect.png";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

function UseCallback() {
  const codeString = `function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }`;

  return (
    <div>
      <p style={{ color: "white" }}>UseMemo</p>
      {/* <img src={Img} alt="state component"></img> */}
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>
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

export default UseCallback;
