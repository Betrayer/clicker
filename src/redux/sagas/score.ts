import {
  all,
  AllEffect,
  call,
  delay,
  put,
  takeLatest,
} from "redux-saga/effects";
import { isHit } from "../actions/target";
import { SetScoreAction, SET_SCORE } from "../actionTypes/score";

function* randomCoords(action: SetScoreAction) {
  try {
    yield put(isHit(true));
    yield call(action.callback);
  } catch (error) {
    alert(error);
  } finally {
    yield delay(500);
    yield put(isHit(false));
  }
}

function* watchRandoomCoords() {
  yield takeLatest(SET_SCORE, randomCoords);
}

export default function* scoreSagas(): Generator<AllEffect<Generator>, void> {
  yield all([watchRandoomCoords()]);
}
