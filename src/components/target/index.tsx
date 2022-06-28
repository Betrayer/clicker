import React, { FC } from "react";
import "./index.scss";

interface TargetProps {
  handleClick: () => void;
  isTarget: any;
}

const Target: FC<TargetProps> = ({ handleClick, isTarget }) => {
  return (
    <div
      ref={isTarget}
      style={{ top: 294, left: 565 }}
      className="target"
      onClick={handleClick}
    />
  );
};

export default Target;
