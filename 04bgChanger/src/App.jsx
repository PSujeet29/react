import React, { useEffect, useState } from "react";

 
const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>Hello World</div>
      <div className="flex flex-wrap fixed bottom-10 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 rounded-3xl px-3 py-2 bg-amber-50 shadow-lg">
          <button onClick = {()=>{setColor("red")}} className="outline-none px-4 rounded-3xl cursor-pointer"style={{backgroundColor:"red"}}>Red</button>
          <button onClick = {()=>{setColor("green")}} className="outline-none px-4 rounded-3xl cursor-pointer"style={{backgroundColor:"green"}}>green</button>
          <button onClick = {()=>{setColor("yellow")}} className="outline-none px-4 rounded-3xl cursor-pointer"style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick = {()=>{setColor("blue")}} className="outline-none px-4 rounded-3xl cursor-pointer"style={{backgroundColor:"blue"}}>blue</button>
          <button onClick = {()=>{setColor("magenta")}} className="outline-none px-4 rounded-3xl cursor-pointer"style={{backgroundColor:"magenta"}}>magenta</button>
        </div>
      </div>
    </>
  );
};

export default App;
