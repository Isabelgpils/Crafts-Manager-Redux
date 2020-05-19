import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import DmcReduxList from '../redux/DmcReduxList';
import DmcReduxDetail from '../redux/DmcReduxDetail';
import BeadReduxList from '../redux/BeadReduxList';
import BeadReduxDetail from '../redux/BeadReduxDetail';
import SilkReduxList from '../redux/SilkReduxList';
import SilkReduxDetail from '../redux/SilkReduxDetail';
import MetallicReduxList from '../redux/MetallicReduxList';
import MetallicReduxDetail from '../redux/MetallicReduxDetail';
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
								<Link to="/ReduxDMC">My DMC</Link>
							</li>
							<li>
								<Link to="/ReduxSilks">My Silks</Link>
							</li>
							<li>
								<Link to="/ReduxMetallics">My Metallics</Link>
							</li>
							<li>
								<Link to="/ReduxBeads">My Beads</Link>
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
						<Link to="/ReduxDMC">My DMC</Link>
					</li>
					<li>
						<Link to="/ReduxSilks">My Silks</Link>
					</li>
					<li>
						<Link to="/ReduxMetallics">My Metallics</Link>
					</li>
					<li>
						<Link to="/ReduxBeads">My Beads</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/" component={Home}>
				</Route>
				<Route path="/DMC" component={DmcList}>
				</Route>
				<Route path="/Patterns" component={PatternList}>
				</Route>
				<Route path="/Silks" component={SilkList} >
				</Route>
				<Route path="/Beads" component={BeadList}>
				</Route>
				<Route path="/Metallics" >
					<div style={{ marginLeft: '5rem', marginTop: '5rem' }} className="ui container grid">
						<div className="ui row">
							<div className="column three wide" style={{ color: 'black', backgroundColor: 'whiteSmoke' }}>
								<MetallicList />
							</div>
							<div className="column five wide">
								<MetallicReduxDetail />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path="/ReduxDMC">
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
				<Route exact path="/ReduxMetallics">
					<div style={{ marginLeft: '5rem', marginTop: '5rem' }} className="ui container grid">
						<div className="ui row">
							<div className="column four wide" style={{ color: 'black', backgroundColor: 'whiteSmoke' }}>
								<MetallicList />
							</div>
							<div className="column four wide">
								<MetallicReduxDetail />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path="/ReduxSilks">
					<div style={{ marginLeft: '5rem', marginTop: '5rem' }} className="ui container grid">
						<div className="ui row">
							<div className="column four wide" style={{ color: 'black', backgroundColor: 'whiteSmoke' }}>
								<SilkReduxList />
							</div>
							<div className="column five wide">
								<SilkReduxDetail />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path="/ReduxBeads">
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
