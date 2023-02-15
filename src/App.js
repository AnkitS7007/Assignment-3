import "./App.css";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(10);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  let color;

  if (count <= 4) {
    color = "green";
  } else if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }

  return (
    <>
      <div className="counter">
        <h1 style={{ color }}>{count}</h1>
      </div>
      <div className="btn">
        <button onClick={increment}>Increment</button>
        <button className="btn2" onClick={decrement}>Decrement</button>
      </div>
      <h3><i>Asignment done by Ankit Sharma - 12016468</i></h3>
    </>
  );
};
export default Counter;
