import React, { FC } from "react";
import Target from "../target";
import "./index.scss";

const Field: FC = () => {
  return (
    <section className="field">
      <span>i am field</span>
      <Target />
    </section>
  );
};

export default Field;
