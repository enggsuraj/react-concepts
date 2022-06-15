import React, { useState, useReducer } from "react";
import "./UseReducer.css";
import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducer() {
  const codeString = `function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  function UseReducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div className="container">
        <button type="button" value="+" onClick={handleIncrement}>+</button>     
        <h1>{state.count}</h1>
        <button type="button" value="-" onClick={handleDecrement}>-</button>
    </div>
  );
}`;

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div className="wrapper">
      <h2>useReducer Hook</h2>
      <p>
        An alternative to useState. It allows for custom state logic. If you
        find yourself keeping track of multiple pieces of state that rely on
        complex logic, useReducer may be useful.
      </p>
      <div className="box">
        <button type="button" value="+" onClick={handleIncrement}>
          +
        </button>
        &nbsp;&nbsp;
        <h1>{state.count}</h1>
        &nbsp;&nbsp;
        <button type="button" value="-" onClick={handleDecrement}>
          -
        </button>
      </div>

      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>

      <div>
        <Link to="/10">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/12">
          <button>Next</button>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default UseReducer;
