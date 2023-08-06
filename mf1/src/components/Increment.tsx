import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../slices/counter-slice";

const Increment = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div style={{ color: "blue" }}>
      <h1>Increment MicroFrontend</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Increment;
