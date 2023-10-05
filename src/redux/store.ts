import { combineReducers, configureStore } from '@reduxjs/toolkit';
import scoreSlice from './reducers/score';

const rootReducer = combineReducers({
	scoreSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
