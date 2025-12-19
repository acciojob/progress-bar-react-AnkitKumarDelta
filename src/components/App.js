import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const[progress, setProgress] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

 useEffect(() => {
    if (progress >= 50) return;

    const textTimer = setTimeout(() => {
      setProgress(prev => prev + 5);
    }, 1000);

    const barTimer = setTimeout(() => {
      setInnerWidth(prev => prev + 5);
    }, 1000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(barTimer);
    };
  }, [progress]);

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
      <p>{progress*2}%</p>
    </div>
  );
};

export default App;
