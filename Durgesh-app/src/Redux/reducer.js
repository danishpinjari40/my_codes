import {
	GETPRODUCTLAPTOPDATA_REQUEST,
	GETPRODUCTLAPTOPDATA_SUCCESS,
	GETPRODUCTLAPTOPDATA_FAILURE,
} from './actionType';
//* ---------- Start
import {
	ALL_PRODUCTS,
	CART_PRODUCTS,
	REMOVE_DATA_FROM_CART,
	INCREASE_CART_QUANTITY,
	DECREASE_CART_QUANTITY,
	REMOVE_ALL_FROM_CART,
} from './action';

const initialState = {
	isLaptopLoading: true,
	productArrayLaptop: [],
	isLaptopError: false,
};

const LaptopReducer = (oldState = initialState, action) => {
	switch (action.type) {
		case GETPRODUCTLAPTOPDATA_REQUEST:
			return { ...oldState, isLaptopLoading: false };
		case GETPRODUCTLAPTOPDATA_SUCCESS:
			return {
				...oldState,
				productArrayLaptop: action.payload,
				isLaptopLoading: true,
			};
		case GETPRODUCTLAPTOPDATA_FAILURE:
			return { ...oldState, isLaptopError: true, isLaptopLoading: true };
		default:
			return oldState;
	}
};

export { LaptopReducer };

//* ---------- Start

const initial_State = {
	storeData: [],
	cartData: [],
};

export const reducer = (state = initial_State, { type, payload }) => {
	switch (type) {
		//* all products
		case ALL_PRODUCTS: {
			return {
				...state,
				storeData: payload,
			};
		}

		//* add to cart
		case CART_PRODUCTS: {
			return {
				...state,
				cartData: [...state.cartData, payload],
			};
		}

		//* increase quantity
		case INCREASE_CART_QUANTITY: {
			return {
				...state,
				cartData: state.cartData.map((item) =>
					item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
				),
			};
		}

		//* decrease quantity
		case DECREASE_CART_QUANTITY: {
			return {
				...state,
				cartData: state.cartData.map((item) =>
					item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
				),
			};
		}

		//* remove item from cart
		case REMOVE_DATA_FROM_CART: {
			return {
				...state,
				cartData: state.cartData.filter((item) => item.id !== payload),
			};
		}

		//* remove All item from cart
		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cartData: [],
			};
		}

		default:
			return state;
	}
};
