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
