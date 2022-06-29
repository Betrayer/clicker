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
      style={{ top: "50%", left: "50%" }}
      className="target"
      onClick={handleClick}
    />
  );
};

export default Target;
