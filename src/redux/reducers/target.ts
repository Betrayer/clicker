import { IS_HIT, SET_COORDS, TargetActions } from "../actionTypes/target";
import { CoordsData } from "../../types";

interface TargetState {
  coords: CoordsData;
  isHit: boolean;
}

const initialState: TargetState = {
  coords: {
    width: 0,
    height: 0,
  },
  isHit: false,
};

export const targetReducer = (
  state = initialState,
  action: TargetActions
): TargetState => {
  switch (action.type) {
    case SET_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    case IS_HIT:
      return {
        ...state,
        isHit: action.payload,
      };
    default:
      return state;
  }
};
