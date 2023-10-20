import { combineReducers, configureStore } from '@reduxjs/toolkit';

import scoreSlice from './reducers/score';
import statusSlice from './reducers/status';

const rootReducer = combineReducers({
	scoreSlice,
	statusSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
