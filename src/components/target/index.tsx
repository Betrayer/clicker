import React, { FC } from "react";
import "./index.scss";

interface TargetProps {
  clickCounter: () => void;
}

const Target: FC<TargetProps> = ({ clickCounter }) => {
  return (
    <div className="target" onClick={clickCounter}>
      <span>click me</span>
    </div>
  );
};

export default Target;
