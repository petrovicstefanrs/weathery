import {initTypes} from '../types';
import ENV from '../../env';

export const initApp = () => {
	return dispatch => {
		dispatch(initAppStart());

		if (ENV.weather_api_endpoint && ENV.weather_api_key) {
			return dispatch(initAppSuccess());
		}

		return dispatch(initAppError(`No API information available`));
	};
};

export const initAppStart = () => {
	return {
		type: initTypes.INIT_APP_START,
	};
};

export const initAppSuccess = () => {
	return {
		type: initTypes.INIT_APP_END,
	};
};

export const initAppError = error => {
	return {
		type: initTypes.INIT_APP_ERROR,
		payload: error,
	};
};
