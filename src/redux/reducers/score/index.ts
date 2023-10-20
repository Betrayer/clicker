import { IState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IState = {
	score: 0,
};

const scoreSlice = createSlice({
	name: 'scoreSlice',
	initialState,
	reducers: {
		incrementScore: (state) => {
			state.score += 1;
		},
		resetScore: (state) => {
			state.score = 0;
		},
	},
	extraReducers: {},
});

export const { incrementScore, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
