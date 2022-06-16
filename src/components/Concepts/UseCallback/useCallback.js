import React, { useEffect, useState } from "react";
import "./useCallback.css";

import Img from "../../../assets/useeffect.png";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Todos from "./Todos";

function UseCallback() {
  const codeString = `
  import { useState } from "react";
  import ReactDOM from "react-dom/client";
  import Todos from "./Todos";
  
  const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  
  import { memo } from "react";
  const Todos = ({ todos, addTodo }) => {
      console.log("child render");
      return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        </>
        );
    };

    export default memo(Todos);`;

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="wrapper">
      <h2>UseCallback</h2>
      <p>
        The React useCallback Hook returns a memoized callback function. This
        allows us to isolate resource intensive functions so that they will not
        automatically run on every render. The useCallback Hook only runs when
        one of its dependencies update.
      </p>{" "}
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <div className="navigation">
        <Link to="/usereducer">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/customhook">
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

export default UseCallback;
