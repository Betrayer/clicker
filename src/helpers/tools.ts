import { CoordsData } from "../types";

export const randomizer = (width: number, height: number): CoordsData => {
  const randomResult = {
    width: Math.floor(Math.random() * (width - 30 + 1)) + 30,
    height: Math.floor(Math.random() * (height - 30 + 1)) + 30,
  };
  return randomResult;
};
