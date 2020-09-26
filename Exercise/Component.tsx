import React from "react";

// Interface for an action
interface IAction {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  color: string;
}

interface ComponentProps {
  // Fill this in then continue to implement the component
}

//@ts-expect-error
// Hint - what type should "props" be?
const getStyle = (props) => css`
  height: 100%;
  width: 100%;
  min-width: 400px;
  background-color: ${props.backgroundColor};
  display: flex;
  flex-direction: column;

  .title {
    font-size: 20px;
  }
  .classTitle {
    font-size: 19px;
    font-weight: bold;
  }
  .classInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

// Continue implementing the component here
