import React, { FC, useState } from "react";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  const [clicks, setClicks] = useState(0);

  const clickCounter = () => {
    setClicks(clicks + 1);
  };

  return (
    <section className="field">
      <span>i am field</span>
      <Target clickCounter={clickCounter} />
    </section>
  );
};

export default Field;
