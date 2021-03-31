import React from "react";

function Heading({ title, para }) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
}

export default Heading;
