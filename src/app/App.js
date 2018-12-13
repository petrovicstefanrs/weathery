import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import initStore from '../redux/store';
import history from '../redux/util/createHistory';

import RootRouter from '../views/routes/root-router';

const store = initStore();

export const App = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<RootRouter />
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
