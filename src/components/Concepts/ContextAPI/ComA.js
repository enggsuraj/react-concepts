import React, { useContext } from "react";
import ComB from "./ComB";
import { ColorContext } from "./ColorContext";

function ComA() {
  const c = useContext(ColorContext);
  return (
    <div style={{ backgroundColor: c.color.red }}>
      <p>This is ComA</p>
      <ComB />
    </div>
  );
}

export default ComA;
