import { IState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IState = {
	isGameInProgress: false,
};

const statusSlice = createSlice({
	name: 'statusSlice',
	initialState,
	reducers: {
		handleGameStatus: (state, action) => {
			state.isGameInProgress = action.payload;
		},
	},
	extraReducers: {},
});

export const { handleGameStatus } = statusSlice.actions;

export default statusSlice.reducer;
