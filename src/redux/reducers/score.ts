import { ScoreActions, SET_SCORE } from "./../actionTypes/score";

interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0,
};

export const scoreReducer = (
  state = initialState,
  action: ScoreActions
): ScoreState => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};
