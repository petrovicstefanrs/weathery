import {weatherTypes} from '../types';
import {weatherApi} from '../../services/api';

export const getWeather = (city, days = 7) => {
	return dispatch => {
		dispatch(getWeatherStart());

		weatherApi
			.getForecast(city, days)
			.then(res => {
				return dispatch(getWeatherSuccess(res));
			})
			.catch(err => {
				getWeatherError(err);
			});
	};
};

export const getWeatherStart = () => {
	return {
		type: weatherTypes.GET_WEATHER_START,
	};
};

export const getWeatherSuccess = res => {
	return {
		type: weatherTypes.GET_WEATHER_END,
		payload: res.data,
	};
};

export const getWeatherError = error => {
	return {
		type: weatherTypes.GET_WEATHER_ERROR,
		payload: error,
	};
};
