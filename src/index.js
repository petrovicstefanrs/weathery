import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './util/serviceWorker';
import App from './app';

import './styles/index.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// Change this to register() if you want the app to work offline
serviceWorker.unregister();
