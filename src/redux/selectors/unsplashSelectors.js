export const isLoading = state => {
	return state.photos.loading;
};

export const getCurrentPhoto = state => {
	return state.photos.currentPhoto;
};

export const getPreviousPhoto = state => {
	return state.photos.previousPhoto;
};

export const getAuthor = state => {
	return state.photos.author;
};

export const hasError = state => {
	return state.photos.error;
};
