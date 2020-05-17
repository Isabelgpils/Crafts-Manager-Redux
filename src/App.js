import React, { useEffect, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header'

// import ProjectsState from './components/context/ProjectState';

const App = () => {
	useEffect(() => {
		//initialize Materialize JS
		M.AutoInit();
	});

	return (

		<Fragment>
			<Header />
		</Fragment>

	);
};

export default App;
