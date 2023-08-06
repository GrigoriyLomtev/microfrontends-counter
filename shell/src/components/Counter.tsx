import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Counter = () => {
  const { counter } = useTypedSelector((state) => state.counter);

  return <h1>{`count: ${counter}`}</h1>;
};

export default Counter;
