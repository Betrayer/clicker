import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomizer } from "../../helpers/tools";
import { setScore } from "../../redux/actions/score";
import { RootState } from "../../redux/rootReducer";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  const currentScore = useSelector((state: RootState) => state.score.score);
  const dispatch = useDispatch();
  const isTarget = useRef(null);

  const handleClick = (): void => {
    const callback = () => {
      randomizer(window.innerWidth, window.innerHeight);
    };
    isTarget.current && dispatch(setScore(currentScore + 1, callback));
  };

  return (
    <section className="field">
      <Target handleClick={handleClick} isTarget={isTarget} />
    </section>
  );
};

export default Field;
