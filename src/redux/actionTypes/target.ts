import { CoordsData } from "../../types";

export const SET_COORDS = "SET_COORDS";
export const IS_HIT = "IS_HIT";

export type SetCoordsAction = {
  type: typeof SET_COORDS;
  payload: CoordsData;
};

export type IsHitAction = {
  type: typeof IS_HIT;
  payload: boolean;
};

export type TargetActions = SetCoordsAction | IsHitAction;
