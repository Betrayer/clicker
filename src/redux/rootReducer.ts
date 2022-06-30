import { combineReducers } from "redux";
import { targetReducer } from "./reducers/target";
import { scoreReducer } from "./reducers/score";

const RootReducer = combineReducers({
  score: scoreReducer,
  target: targetReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
