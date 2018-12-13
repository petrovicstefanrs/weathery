import axios from 'axios';

const defaultConfig = {
	responseType: 'json',
};

function request(config = defaultConfig) {
	const instance = axios.create(config);
	let _interceptor = undefined;

	function addResponseInterceptors(onFulfilled, onRejected) {
		removeResponseInterceptors();
		_interceptor = instance.interceptors.response.use(onFulfilled, onRejected);
	}

	function removeResponseInterceptors() {
		instance.interceptors.response.eject(_interceptor);
	}

	function setAuthToken(token) {
		instance.defaults.headers.Authorization = `Bearer ${token}`;
	}

	function removeToken() {
		instance.defaults.headers.Authorization = undefined;
	}

	return {
		...instance,
		setAuthToken,
		removeToken,
		addResponseInterceptors,
		removeResponseInterceptors,
	};
}

export default request();
