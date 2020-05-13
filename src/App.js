import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Home from './components/home/Home';



const App = () => {
	useEffect(() => {
		//initialize Materialize JS
		M.AutoInit();
	});

	return (
		<Fragment>
			<Home />
		</Fragment>
	);
};

export default App;
