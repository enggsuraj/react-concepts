import React, { useContext } from "react";
import ComC from "./ComC";
import { ColorContext } from "./ColorContext";

function ComB() {
  const c = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: c.color.green }}>
      <p>{c.name} in ComB</p>
      <ComC />
    </div>
  );
}

export default ComB;
