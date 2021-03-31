import React, { useEffect, useState } from "react";
import "./useeffect.css";

import Img from "../../../assets/useeffect.png";

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
      <img src={Img} alt="state component"></img>
      <div className="data">
        {state.map((each) => (
          <div className="data_each">
            <p>{each.id}</p>
            <p>{each.username}</p>
          </div>
        ))}
      </div>

      <div className="btn">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </div>
  );
}

export default UseEffect;
