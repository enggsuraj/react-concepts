import React, { useState } from "react";
import "./form.css";

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
    <div>
      {/* <img src={Img} alt="state component"></img> */}
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
      <a href="/">
        <button>Home</button>
      </a>
    </div>
  );
}

export default Form;
