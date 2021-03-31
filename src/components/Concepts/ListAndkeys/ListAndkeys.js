import React from "react";
import "./listandkeys.css";

import Img from "../../../assets/listandkey.png";

function ListAndkeys() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <img src={Img} alt="state component"></img>
      <div className="listAndKey">
        {numbers.map((number) => (
          <li key={number.toString()}>{number}</li>
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

export default ListAndkeys;
