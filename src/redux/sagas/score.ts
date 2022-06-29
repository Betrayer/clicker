import { all, AllEffect, call, put, takeLatest } from "redux-saga/effects";
import { SetScoreAction, SET_SCORE } from "../actionTypes/score";

function* randomCoords(action: SetScoreAction) {
  try {
    action.callback();
  } catch (error) {
    alert(error);
  } finally {
    console.log("success");
  }
}

function* watchRandoomCoords() {
  yield takeLatest(SET_SCORE, randomCoords);
}

export default function* scoreSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandoomCoords()]);
}
