import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementHandler() {
    setCounter((counter) => counter + 1);
  }

  function decrementHandler() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button className="counter__btn" onClick={incrementHandler}>
        +
      </button>
      <button className="counter__btn" onClick={decrementHandler}>
        -
      </button>
    </div>
  );
}

export default Counter;
