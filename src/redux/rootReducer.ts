import { combineReducers } from "redux";
import { scoreReducer } from "./reducers/score";

const RootReducer = combineReducers({
  score: scoreReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
