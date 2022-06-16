import React from "react";
import { ColorContext } from "./ColorContext";

function ColorState(props) {
  const color = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
  };

  const name = "suraj";
  return (
    <ColorContext.Provider value={{ color, name }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorState;
