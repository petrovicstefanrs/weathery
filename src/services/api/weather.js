import request from '../request';
import ENV from '../../env';

const DEFAULT_CONFIG = {
	baseURL: ENV.weather_api_endpoint,
};

export const getForecast = (city = 'auto:ip', days = 7) => {
	const params = {
		q: city,
		days: days,
		key: ENV.weather_api_key,
	};

	return request.get('/forecast.json', {params, ...DEFAULT_CONFIG});
};
