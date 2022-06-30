import React, { FC, RefObject } from "react";
import { CoordsData } from "../../types";
import "./index.scss";

interface TargetProps {
  handleClick: () => void;
  currentCoords: CoordsData;
  isTarget: RefObject<HTMLDivElement>;
}

const Target: FC<TargetProps> = ({ handleClick, isTarget, currentCoords }) => {
  return (
    <div
      ref={isTarget}
      style={{
        top: currentCoords ? currentCoords.height : "50%",
        left: currentCoords ? currentCoords.width : "50%",
      }}
      className="target"
      onClick={handleClick}
    />
  );
};

export default Target;
