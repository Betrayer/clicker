export const SET_SCORE = "SET_SCORE";

export type SetScoreAction = {
  type: typeof SET_SCORE;
  payload: number;
  callback: () => void;
};

export type ScoreActions = SetScoreAction;
