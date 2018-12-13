import createReducer from '../util/createReducer';
import {unsplashTypes} from '../types';

const initialState = {
	loading: false,
	error: null,
	currentPhoto: null,
	previousPhoto: null,
	author: null,
};

export const getRandomPhotoStart = state => {
	return {
		...state,
		loading: true,
		error: null,
		author: null,
	};
};

export const getRandomPhotoEnd = (state, {payload}) => {
	return {
		...state,
		error: null,
		loading: false,
		currentPhoto: payload.image,
		previousPhoto: state.currentPhoto,
		author: payload.user,
	};
};

export const getRandomPhotoError = (state, {payload}) => {
	return {
		...state,
		error: payload,
		loading: false,
	};
};

export default createReducer(
	{
		[unsplashTypes.GET_RANDOM_PHOTO_START]: getRandomPhotoStart,
		[unsplashTypes.GET_RANDOM_PHOTO_END]: getRandomPhotoEnd,
		[unsplashTypes.GET_RANDOM_PHOTO_ERROR]: getRandomPhotoError,
	},
	initialState
);
