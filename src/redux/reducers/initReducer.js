import createReducer from '../util/createReducer';
import {initTypes} from '../types';

const initialState = {
	loading: false,
	initialized: false,
	error: null,
};

export const initAppStart = (state) => {
	return {
		...state,
		loading: true,
	};
};

export const initAppEnd = (state) => {
	return {
		...state,
		error: null,
		loading: false,
		initialized: true,
	};
};

export const initAppError = (state, {payload}) => {
	return {
		...state,
		error: payload,
		loading: false,
		initialized: false,
	};
};

export default createReducer(
	{
		[initTypes.INIT_APP_START]: initAppStart,
		[initTypes.INIT_APP_END]: initAppEnd,
		[initTypes.INIT_APP_ERROR]: initAppError,
	},
	initialState
);
