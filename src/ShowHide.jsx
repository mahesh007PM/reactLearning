import React, { useState } from "react";
import { Child } from "./Child";
export function ShowHide() {
  const [isShown, setIshown] = useState(true);
  const childComponent = isShown ? <Child /> : null;
  return (
    <>
      <button className="btn btn-info" onClick={() => setIshown((s) => !s)}>
        Show/Hide
      </button>
      {childComponent}
    </>
  );
}
