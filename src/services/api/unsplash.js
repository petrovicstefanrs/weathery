import request from '../request';
import ENV from '../../env';

const DEFAULT_CONFIG = {
	baseURL: ENV.unsplash_api_endpoint,
	headers: {
		Authorization: `Client-ID ${ENV.unsplash_api_key}`,
		'Accept-Version': `${ENV.unsplash_api_version}`,
	},
};

export const getRandomCityPhoto = () => {
	const params = {
		query: 'nature',
		orientation: 'landscape',
	};

	return request.get('/photos/random', {params, ...DEFAULT_CONFIG});
};
