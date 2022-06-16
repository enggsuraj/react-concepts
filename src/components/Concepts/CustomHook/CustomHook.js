import React, { useState } from "react";
import "./customhook.css";
import { Link } from "react-router-dom";
import useInput from "./useInput";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function CustomHook() {
    //   const [sound, setSound] = useState("");
    //   const [color, setColor] = useState("#000");
  
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000");
  
    function submit(e) {
      e.preventDefault();
      alert('...')  
      // setSound("");
      // setColor("#000");
      resetTitle();
      resetColor();
    }
  
    return (
      <>
        <h2>Custom Hook</h2>
        <form onSubmit={submit} className="customhook">
          <input
            //   value={sound}
            {...titleProps}
            type="text"
            //   onChange={(e) => setSound(e.target.value)}
            placeholder="Enter Sound..."
          />
          <input
            //   value={color}
            {...colorProps}
            type="color"
            //   onChange={(e) => setColor(e.target.value)}
          />
          <button>ADD</button>
        </form>
      </>
    );
  }
  
  export default CustomHook;
  
  import { useState } from "react";
  
  function useInput(initialValue) {
      const [value, setValue] = useState(initialValue);
      return [
        { value, onChange: (e) => setValue(e.target.value) },
        () => setValue(initialValue),
        ];
    }
    
    export default useInput;`;

function CustomHook() {
  //   const [sound, setSound] = useState("");
  //   const [color, setColor] = useState("#000");

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  function submit(e) {
    e.preventDefault();
    // alert(`${sound} sounds like ${color}`);
    alert(`${titleProps.value} sounds like ${colorProps.value}`);

    // setSound("");
    // setColor("#000");
    resetTitle();
    resetColor();
  }

  return (
    <>
      <h2>Custom Hook - useInput</h2>
      <form onSubmit={submit} className="customhook">
        <input
          //   value={sound}
          {...titleProps}
          type="text"
          //   onChange={(e) => setSound(e.target.value)}
          placeholder="Enter Sound..."
        />
        <input
          //   value={color}
          {...colorProps}
          type="color"
          //   onChange={(e) => setColor(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <div className="navigation">
        <Link to="/usecallback">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/router">
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
    </>
  );
}

export default CustomHook;
