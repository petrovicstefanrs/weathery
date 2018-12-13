export const isLoading = state => {
	return state.app.loading;
};

export const isInitialized = state => {
	return state.app.initialized;
};

export const hasError = state => {
	return state.app.error;
};
