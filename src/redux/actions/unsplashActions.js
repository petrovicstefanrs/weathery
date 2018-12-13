import {unsplashTypes} from '../types';
import {unsplashApi} from '../../services/api';

export const getRandomPhoto = () => {
	return dispatch => {
		dispatch(getRandomPhotoStart());

		unsplashApi
			.getRandomCityPhoto()
			.then(res => {
				return dispatch(getRandomPhotoSuccess(res));
			})
			.catch(err => {
				getRandomPhotoError(err);
			});
	};
};

export const getRandomPhotoStart = () => {
	return {
		type: unsplashTypes.GET_RANDOM_PHOTO_START,
	};
};

export const getRandomPhotoSuccess = res => {
	const {urls, user} = res.data;
	const image = urls ? urls.regular : null;

	return {
		type: unsplashTypes.GET_RANDOM_PHOTO_END,
		payload: {image, user},
	};
};

export const getRandomPhotoError = error => {
	return {
		type: unsplashTypes.GET_RANDOM_PHOTO_ERROR,
		payload: error,
	};
};
