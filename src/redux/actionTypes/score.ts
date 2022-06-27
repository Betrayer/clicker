export const SET_SCORE = "SET_SCORE";

export type SetScore = {
  type: typeof SET_SCORE;
  payload: number;
};

export type ScoreActions = SetScore;
