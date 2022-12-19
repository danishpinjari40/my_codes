import { applyMiddleware, legacy_createStore } from 'redux';
import { LaptopReducer } from './reducer';
import thunk from 'redux-thunk';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
const store = legacy_createStore(LaptopReducer, applyMiddleware(thunk));

// export { store };

export default store;

// //* -------------
