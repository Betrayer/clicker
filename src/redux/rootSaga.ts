import { all, AllEffect } from "redux-saga/effects";

function* rootSaga(): Generator<AllEffect<Generator>, void> {
  yield all([]);
}

export default rootSaga;
