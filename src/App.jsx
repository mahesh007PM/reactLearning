import { useState } from "react";

function App() {
  const [name,setname]= useState('')
  const [age,setage]= useState(0);

  const substract = ()=>{
    return setage((newage)=>
      newage - 1)
  }
  const added = ()=>{
    return setage((newage)=>
      newage + 1)
  }

  return (
    <>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>

    <div className="">
      <button onClick={substract}>-</button>
      {age}
      <button onClick={added}>+</button>
    </div>
    <p>My name is {name} and i am {age} years old.</p>
    </>
  );
}

export default App;
