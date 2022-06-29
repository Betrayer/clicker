import { ScoreActions, SET_SCORE } from "../actionTypes/score";

export const setScore = (
  payload: number,
  callback: () => void
): ScoreActions => ({
  type: SET_SCORE,
  payload,
  callback,
});
