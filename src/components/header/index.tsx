import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./index.scss";

const Header: FC = () => {
  const currentScore = useSelector((state: RootState) => state.score.score);

  return (
    <header className="header">
      <span>Scores: {currentScore}</span>
    </header>
  );
};

export default Header;
