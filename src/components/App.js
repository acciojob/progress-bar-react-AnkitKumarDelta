import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // const[width_percentage, setWidth_percentage] = useState(0);
  const[innerWidth, setInnerWidth] = useState(0);

  const intervalId = setTimeout(()=>{
    let x = innerWidth+10;
    if(x>100){
      clearTimeout(intervalId);
    }
   else setInnerWidth(x);
  },1000);
  
  return (
    <div>
      <h1>Progress Bar</h1>
        <div id="barOuter">
          <div id="barInner" style={{backgroundColor:"#0000FF",height:"100%",width:`${innerWidth}%`}}></div>
        </div>
        <p>{`${innerWidth}%`}</p>
    </div>
  )
}

export default App
