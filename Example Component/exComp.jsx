import React, { useState } from "react";

const ExampleComponent = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
      <button onClick={incrementCount}>Count: {count}</button>
    </>
  );
};

export default ExampleComponent;
