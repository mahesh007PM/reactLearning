import { useState } from "react";
import "./Style.css";
function App() {
  const initial_Value = ["A", "B", "C"];
  const removeFirstElement = () => {
    setArr((currentArr) => {
      return currentArr.slice(1);
    });
  };
  const removeAllB = (letter) => {
    setArr((currentArr) => {
      return currentArr.filter((element) => element !== letter);
    });
  };
  const addToStart = (letter) => {
    setArr((currentArr) => {
      return [letter, ...currentArr];
    });
  };
  const addToEnd = (letter) => {
    setArr((currentArr) => {
      return [...currentArr, letter];
    });
  };
  const clear = () => {
    setArr([]);
  };
  const reset = () => {
    setArr(initial_Value);
  };

  const [arr, setArr] = useState(initial_Value);
  return (
    <>
      <br />
      <div className="btnClass">
        <button
          className="btn btn-primary btnClassli"
          onClick={removeFirstElement}
        >
          removeFirstElement
        </button>

        <button
          className="btn btn-secondary btnClassli"
          onClick={() => removeAllB("B")}
        >
          Remove All B's
        </button>

        <button
          className="btn btn-warning btnClassli"
          onClick={() => addToStart("X")}
        >
          Add to start
        </button>

        <button
          className="btn btn-danger btnClassli"
          onClick={() => addToEnd("Z")}
        >
          Add to End
        </button>

        <button className="btn btn-info btnClassli" onClick={clear}>
          Clear
        </button>

        <button className="btn btn-success btnClassli" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="maincontent">
        <p>{arr.join(",")}</p>
      </div>
    </>
  );
}

export default App;
