import React, { useState } from "react";

// Interface defining the props that the component takes.
// Note the function definition defines both parameter and return types.
interface ExampleProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Here example is typed as a React Functional Component (FC), which takes ExampleProps as its prop type
const Example: React.FC<ExampleProps> = (props) => {
  const [count, setCount] = useState<number>(0); // useState hooks can be given a type

  // This function implictely returns void
  const incrementCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
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
