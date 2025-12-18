import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [innerWidth, setInnerWidth] = useState(0);

 useEffect(() => {
    if (innerWidth >= 50) return; 

    const timer = setTimeout(() => {
      setInnerWidth(prev => prev + 10);
    }, 1000);

    return () => clearTimeout(timer);
  }, [innerWidth]);

  return (
    <div>
      <h1>Progress Bar</h1>
      <div id="barOuter">
        <div
          id="barInner"
          style={{
            backgroundColor: "#0000FF",
            height: "100%",
            width: `${innerWidth}px`
          }}
        ></div>
      </div>
      <p>{innerWidth}%</p>
    </div>
  );
};

export default App;
