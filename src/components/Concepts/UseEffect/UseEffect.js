import React, { useEffect, useState } from "react";
import "./useeffect.css";

import Img from "../../../assets/useeffect.png";
import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function UseEffect() {
    const [state, setState] = useState([]);
  
    useEffect(() => {
      fetchdata();
    }, []);
  
    const fetchdata = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setState(data);
      console.log(data);
    };
  
    return (
        <div className="data">
          {state.map((each) => (
            <div className="data_each">
              <p>{each.id}</p>
              <p>{each.username}</p>
            </div>
          ))}
        </div>
    );
}`;

function UseEffect() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setState(data);
    console.log(data);
  };

  return (
    <div>
      <div>
        <h2>UseEffect</h2>
      </div>

      <div className="data">
        {state.map((each) => (
          <div className="data_each">
            <p>{each.id}</p>
            <p>{each.username}</p>
          </div>
        ))}
      </div>

      <div class="navigation">
        <Link to="/listandkeys">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/userefs">
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

export default UseEffect;
