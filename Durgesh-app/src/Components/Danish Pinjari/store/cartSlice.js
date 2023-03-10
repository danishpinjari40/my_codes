import { toast } from 'react-toastify';

const { createSlice } = require('@reduxjs/toolkit');

// npm i react-toastify

const cartS1ice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		add(state, action) {
			state.push(action.payload);
			
		},
		remove(state, action) {
			return state.filter((item) => item.id !== action.payload);
			
		},
	},
});

export const { add, remove } = cartS1ice.actions;
export default cartS1ice.reducer;
