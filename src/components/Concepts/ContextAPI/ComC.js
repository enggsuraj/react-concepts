import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";

function ComC() {
  const c = useContext(ColorContext);

  return <div style={{ backgroundColor: c.color.blue }}>This is ComC</div>;
}

export default ComC;
