import { IS_HIT, SET_COORDS, TargetActions } from "../actionTypes/target";
import { CoordsData } from "../../types";

export const setCoords = (payload: CoordsData): TargetActions => ({
  type: SET_COORDS,
  payload,
});

export const isHit = (payload: boolean): TargetActions => ({
  type: IS_HIT,
  payload,
});
