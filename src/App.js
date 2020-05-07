import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import DmcReduxList from './redux/DmcReduxList';
import DmcReduxDetail from './redux/DmcReduxDetail';
import BeadReduxList from './redux/BeadReduxList';
import BeadReduxDetail from './redux/BeadReduxDetail';
import Home from './components/display/Home';
import DmcList from './components/threads/DmcList';
import BeadList from './components/beads/BeadList';
import SilkList from './components/threads/SilkList';
import PatternList from './components/patterns/PatternList';
import MetallicList from './components/metallics/MetallicList';
import Header from './components/display/Header';


const App = () => {
	useEffect(() => {
		//initialize Materialize JS
		M.AutoInit();
	});

	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path="/Home">
					<Home />
				</Route>
				<Route path="/DMC">
					<DmcList />
				</Route>
				<Route path="/Patterns">
					<PatternList />
				</Route>
				<Route path="/Silks">
					<SilkList />
				</Route>
				<Route path="/Beads">
					<BeadList />
				</Route>
				<Route path="/Metallics">
					<MetallicList />
				</Route>
				<Route path="/DMCRedux">
					<div style={{ marginLeft: '5rem', marginTop: '5rem' }} className="ui container grid">
						<div className="ui row">
							<div className="column three wide">
								<DmcReduxList />
							</div>
							<div className="column five wide">
								<DmcReduxDetail />
							</div>
						</div>
					</div>
				</Route>
				<Route path="/BeadsRedux">
					<div style={{ marginLeft: '5rem', marginTop: '5rem' }} className="ui container grid">
						<div className="ui row">
							<div className="column four wide" style={{ color: 'black', backgroundColor: 'whiteSmoke' }}>
								<BeadReduxList />
							</div>
							<div className="column four wide">
								<BeadReduxDetail />
							</div>
						</div>
					</div>
				</Route>
				{/* <Route path="/SearchAll">
					<SearchAll />
				</Route> */}
			</Switch>
		</Fragment>
	);
};

export default App;
