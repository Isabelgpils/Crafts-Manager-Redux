import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './components/redux/store';

ReactDOM.render(
	<Provider store={store}>
		< Router >
			<App />
		</Router >
	</Provider>,
	document.querySelector('#root')
);
