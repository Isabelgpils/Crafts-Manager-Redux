import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import DmcReduxList from '../redux/DmcReduxList';
import DmcReduxDetail from '../redux/DmcReduxDetail';
import BeadReduxList from '../redux/BeadReduxList';
import BeadReduxDetail from '../redux/BeadReduxDetail';
import DmcList from '../threads/DmcList';
import BeadList from '../beads/BeadList';
import SilkList from '../threads/SilkList';
import PatternList from '../patterns/PatternList';
import MetallicList from '../metallics/MetallicList';
import Home from '../home/Home';

const Header = () => {
	return (
		<Fragment>
			<div className="navbar-fixed">
				<nav>
					<div style={{ backgroundColor: 'teal' }} className="nav-wrapper">
						<div>
							<div style={{ marginLeft: '10px' }} className="brand-logo">
								My Craft Manager
							</div>
						</div>

						<a href="/" data-target="mobile-nav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						{/* hide on smaller screens */}
						<ul className="right hide-on-med-and-down" style={{ margin: '5px' }} >
							<li>
								<Link to="/HOME">Home</Link>
							</li>
							<li>
								<Link to="/DMC">DMC Thread</Link>
							</li>
							<li>
								<Link to="/Silks">Silk Thread</Link>
							</li>
							<li>
								<Link to="/Beads">Beads </Link>
							</li>
							<li>
								<Link to="/Metallics">Metallic Thread</Link>
							</li>
							<li>
								<Link to="/Patterns">Patterns</Link>
							</li>
							<li>
								<Link to="/DMCRedux">My DMC</Link>
							</li>
							<li>
								<Link to="/BeadsRedux">My Beads</Link>
							</li>
						</ul>
					</div>
				</nav>
				{/* side nav on smaller screens */}
				<ul className="sidenav" id="mobile-nav">
					<li>
						<Link to="/Home">Home</Link>
					</li>
					{/* <li>
						<Link to="/SearchAll">Search All </Link>
					</li> */}
					<li>
						<Link to="/DMC">DMC Thread</Link>
					</li>
					<li>
						<Link to="/Silks">Silk Thread</Link>
					</li>
					<li>
						<Link to="/Beads">Beads </Link>
					</li>
					<li>
						<Link to="/Metallics">Metallic Thread</Link>
					</li>
					<li>
						<Link to="/Patterns">Patterns</Link>
					</li>
					<li>
						<Link to="/MyDMC">DMC Redux</Link>
					</li>
					<li>
						<Link to="/MyBeads">BeadsRedux</Link>
					</li>
					<li>
						<Link to="/Material">Material</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/" component={Home}>
				</Route>
				<Route exact path="/DMC" component={DmcList}>
				</Route>
				<Route exact path="/Patterns" component={PatternList}>
				</Route>
				<Route exact path="/Silks" component={SilkList} >
				</Route>
				<Route path="/Beads" component={BeadList}>
				</Route>
				<Route exact path="/Metallics" component={MetallicList} >
				</Route>
				<Route exact path="/MyDMC">
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

				<Route exact path="/beads/:MyBeads">
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
			</Switch>
		</Fragment>
	);
};

export default Header;
