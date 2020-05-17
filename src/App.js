import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
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
