import React, { useEffect, useState, useMemo } from "react";
import "./useMemo.css";

import Img from "../../../assets/useeffect.png";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

function UseMemo() {
  const codeString = `import "./styles.css";
  import React, { useMemo, useState, useRef, useEffect } from "react";
  
  const expensiveCal = () => {
    let num = 0;
    for (let i = 0; i < 10000; i++) {
      num = num + i;
    }
    return num;
  };
  
  export default function App() {
    const result = useMemo(() => {
      return expensiveCal();
    }, []);
  
    return <>{result}</>;
  }
  `;

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2 style={{ color: "white" }}>UseMemo - Optimize computed value</h2>
      {/* <img src={Img} alt="state component"></img> */}

      <div>
        <span>{isEven ? "Even" : "Odd"}</span>
        <button onClick={incrementOne}>IncrementOne : {counterOne}</button>
        <button onClick={incrementTwo}>IncrementTwo : {counterTwo}</button>
      </div>
      <div>
        <Link to="/userefs">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/usereducer">
          <button>Next</button>
        </Link>
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default UseMemo;
