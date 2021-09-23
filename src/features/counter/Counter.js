import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  increment,
  decrement,
  selectCount,
} from "./counterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="counter">
      <h2>Counter Example - Redux Toolkit</h2>
      <h4>Result : {count}</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h3>Increment by Value:</h3>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment By Amount
      </button>
    </div>
  );
};

export default Counter;
