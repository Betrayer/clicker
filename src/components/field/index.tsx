import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { borderlines } from "../../constants";
import { randomizer } from "../../helpers/tools";
import { setScore } from "../../redux/actions/score";
import { setCoords } from "../../redux/actions/target";
import { RootState } from "../../redux/rootReducer";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  const currentScore = useSelector((state: RootState) => state.score.score);
  const currentCoords = useSelector((state: RootState) => state.target.coords);
  const isHit = useSelector((state: RootState) => state.target.isHit);

  const dispatch = useDispatch();

  const isTarget = useRef<HTMLDivElement>(null);

  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOver(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isHit]);

  const handleClick = (): void => {
    const callback = () => {
      dispatch(
        setCoords(
          randomizer(
            window.innerWidth - borderlines.horizontal,
            window.innerHeight - borderlines.vertical
          )
        )
      );
    };
    isTarget.current && dispatch(setScore(currentScore + 1, callback));
  };

  return (
    <section className="field">
      {isOver ? (
        <span>you died</span>
      ) : (
        <Target
          handleClick={handleClick}
          isTarget={isTarget}
          currentCoords={currentCoords}
        />
      )}
    </section>
  );
};

export default Field;
