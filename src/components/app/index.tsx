import React, { FC } from "react";
import Field from "../field";
import Header from "../header";
import "./index.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Field />
    </div>
  );
};

export default App;
