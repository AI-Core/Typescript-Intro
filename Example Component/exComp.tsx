import React, { useState } from "react";

interface ExampleProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Example: React.FC<ExampleProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
      <button onClick={incrementCount}>Count: {count}</button>
    </>
  );
};

export default Example;
