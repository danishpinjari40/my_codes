import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/todoSlice';

//* Store Configuration

export const store = configureStore({
	reducer: todoReducer,
});
