import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import initReducer from './initReducer';
import weatherReducer from './weatherReducer';
import unsplashReducer from './unsplashReducer';

const rootReducer = history => {
	return combineReducers({
		router: connectRouter(history),
		app: initReducer,
		weather: weatherReducer,
		photos: unsplashReducer,
	});
};

export default rootReducer;
