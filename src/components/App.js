import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  if (innerWidth < 100) {
    setTimeout(() => {
      setInnerWidth(innerWidth + 10);
    }, 1000);
  }

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
