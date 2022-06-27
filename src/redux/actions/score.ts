import { ScoreActions, SET_SCORE } from "../actionTypes/score";

export const setScore = (payload: number): ScoreActions => ({
  type: SET_SCORE,
  payload,
});
