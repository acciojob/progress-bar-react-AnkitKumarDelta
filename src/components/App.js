import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [innerWidth, setInnerWidth] = useState(0);

 useEffect(() => {
    if (innerWidth === 50) return;

    const timer = setTimeout(() => {
      setInnerWidth(prev => {
        if (prev >= 50) return prev;
        return prev + 5;
      });
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
      <p>{innerWidth*2}%</p>
    </div>
  );
};

export default App;
