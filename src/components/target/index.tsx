import React, { FC } from "react";
import "./index.scss";

interface TargetProps {
  handleClick: () => void;
}

const Target: FC<TargetProps> = ({ handleClick }) => {
  return (
    <div className="target" onClick={handleClick}>
      <span>click me</span>
    </div>
  );
};

export default Target;
