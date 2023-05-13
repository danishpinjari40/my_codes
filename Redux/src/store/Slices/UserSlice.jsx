// Creating slice from Redux

import { createSlice } from '@reduxjs/toolkit';
import { clearAllUsers } from '../Action/Action';

const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		addUser(state, action) {
			//** adding user from an Api
			state.push(action.payload);
		},
		removeUser(state, action) {
			//**  Remove data by id --> 1 by 1
			state.splice(action.payload, 1);
		},
		// clearAllUsers() {
		// 	//**  All Data Delete
		// 	return [];
		// },
	},
	//* Extra Reducer for Admin Panel */
	extraReducers(builder) {
		builder.addCase(clearAllUsers, () => {
			return [];
		});
	},
});

//**  extra reducer Definition :- If action is supposed to be handle by one reducer, use reducers.
//** If action is supposed to be handle by multiple reducers, use extraReducers.

//**  console.log(userSlice.actions);

export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;
