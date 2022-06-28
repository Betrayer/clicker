import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../../redux/actions/score";
import { RootState } from "../../redux/rootReducer";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  const currentScore = useSelector((state: RootState) => state.score.score);
  const dispatch = useDispatch();
  const isTarget = useRef(null);

  const handleClick = () => {
    isTarget.current && dispatch(setScore(currentScore + 1));
  };

  return (
    <section className="field">
      <Target handleClick={handleClick} isTarget={isTarget} />
    </section>
  );
};

export default Field;
