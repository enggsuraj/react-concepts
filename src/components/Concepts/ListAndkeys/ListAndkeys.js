import React from "react";
import "./listandkeys.css";

import Img from "../../../assets/listandkey.png";
import { Link } from "react-router-dom";

function ListAndkeys() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <img className="component_image" src={Img} alt="state component"></img>
      <div className="listAndKey">
        {numbers.map((number) => (
          <li key={number.toString()}>{number}</li>
        ))}
      </div>

      <div>
        <Link to="/9">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/11">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ListAndkeys;
