export const isLoading = state => {
	return state.weather.loading;
};

export const getData = state => {
	return state.weather.data;
};

export const hasError = state => {
	return state.weather.error;
};

export const getCurrentData = state => {
	const data = getData(state);
	if (!data) {
		return null;
	}

	const {current} = data;
	return current;
};

export const getForecastData = state => {
	const data = getData(state);
	if (!data) {
		return null;
	}

	const {forecast} = data;
	return forecast;
};

export const getLocationData = state => {
	const data = getData(state);
	if (!data) {
		return null;
	}

	const {location} = data;
	return location;
};

export const getUpdateTimestamp = state => {
	const {updatedAt} = state.weather;
	return updatedAt;
};
