import createReducer from '../util/createReducer';
import {weatherTypes} from '../types';

const initialState = {
	loading: false,
	error: null,
	data: null,
	updatedAt: null,
};

export const getWeatherStart = (state) => {
	return {
		...state,
		loading: true,
		error: null,
	};
};

export const getWeatherEnd = (state, {payload}) => {
	return {
		...state,
		error: null,
		loading: false,
		data: payload,
		updatedAt: Date.now(),
	};
};

export const getWeatherError = (state, {payload}) => {
	return {
		...state,
		error: payload,
		loading: false,
		data: null,
	};
};

export default createReducer(
	{
		[weatherTypes.GET_WEATHER_START]: getWeatherStart,
		[weatherTypes.GET_WEATHER_END]: getWeatherEnd,
		[weatherTypes.GET_WEATHER_ERROR]: getWeatherError,
	},
	initialState
);
