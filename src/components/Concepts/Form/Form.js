import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length !== 0 && email.trim().length !== 0) {
      console.log({ name: name, email: email });
      let obj = { name: name, email: email };
      alert(JSON.stringify(obj));

      setName("");
      setEmail("");
    } else {
      alert("No blank data allowed");
    }
  };
  
  return (
    <div>
      <form>
        <input
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}`;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length !== 0 && email.trim().length !== 0) {
      console.log({ name: name, email: email });
      let obj = { name: name, email: email };
      alert(JSON.stringify(obj));

      setName("");
      setEmail("");
    } else {
      alert("No blank data allowed");
    }
  };

  return (
    <div className="form">
      <h2>React Form</h2>
      <form>
        <input
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />

        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
      <div className="navigation">
        <Link to="/usestate">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/conditionalrendering">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
