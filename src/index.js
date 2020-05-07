import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reducers from './redux/reducers';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
);
