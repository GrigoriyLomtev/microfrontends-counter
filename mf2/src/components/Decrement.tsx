import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../slices/counter-slice";

const Decrement = () => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ color: "orange" }}>
      <h1>Decrement MicroFrontend</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
