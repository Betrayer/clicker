import { all, AllEffect } from "redux-saga/effects";
import scoreSagas from "./sagas/score";

function* rootSaga(): Generator<AllEffect<Generator>, void> {
  yield all([scoreSagas()]);
}

export default rootSaga;
