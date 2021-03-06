import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../../redux/actions/score";
import { RootState } from "../../redux/rootReducer";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  const currentScore = useSelector((state: RootState) => state.score.score);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setScore(currentScore + 1));
  };

  return (
    <section className="field">
      <span>i am field</span>
      <Target handleClick={handleClick} />
    </section>
  );
};

export default Field;
