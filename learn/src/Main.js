import React, { useState } from "react";
export default function Main() {
  const [variable, setVariable] = useState(10);
  function change() {
    setVariable(50);
  }

  return (
    <div>
      {variable}
      <button onClick={change}>click</button>
    </div>
  );
}
