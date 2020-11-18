import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import DmcList from '../threads/DmcList'
import BeadList from '../beads/BeadList';
import ChatelaineList from '../patterns/ChatelaineList';
import MetallicList from '../metallics/MetallicList';
import SearchCrafts from './SearchCrafts.js'
import SearchBeads from './SearchBeads.js'
import SearchDMC from './SearchDMC.js'
import GlorianaList from '../threads/GlorianaList';
import DinkyList from '../threads/DinkyList';
import CaronList from '../threads/CaronList';
import TGList from '../threads/TGList';
import Logo from './Logo2.png';




const Header = () => {
	return (
		<Fragment>
			<div className="navbar-fixed">
				<nav>
					<div style={{ height: "150%", backgroundColor: "rgb(56,64,88)" }} className="nav-wrapper">
						<div>
							<div style={{ marginLeft: '1px' }} className="brand-logo">
								<img src={Logo} alt="logo" width="50%"></img>

							</div>

						</div>

						<a href="/" data-target="mobile-nav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						{/* hide on smaller screens */}
						<ul className="right hide-on-med-and-down" style={{ margin: '5px' }} >
							{/* <li>
								<Link to="/HOME">Home</Link>
							</li> */}
							<li>
								<Link to="/Bead Search">Beads Search</Link>
							</li>
							<li>
								<Link to="/All Search">All Search</Link>
							</li>
							<li>
								<Link to="/Search DMC">Search DMC</Link>
							</li>
							<li>
								<Link to="/DMC">DMC Thread</Link>
							</li>
							<li>
								<Link to="/Gloriana">Gloriana</Link>
							</li>
							<li>
								<Link to="/Dinky Dyes">Dinky Dyes</Link>
							</li>
							<li>
								<Link to="/Caron Waterlilies">Caron Waterlilies</Link>
							</li>
							<li>
								<Link to="/Thread Gatherer">Thread Gatherer</Link>
							</li>
							<li>
								<Link to="/Beads">Beads </Link>
							</li>
							<li>
								<Link to="/Metallics">Metallic Thread</Link>
							</li>
							<li>
								<Link to="/Chatelaine">Chatelaine</Link>
							</li>
						</ul>
					</div>
				</nav>
				{/* side nav on smaller screens */}
				<ul className="sidenav" id="mobile-nav">
					<li>
						<Link to="/Bead Search">Bead Search</Link>
					</li>
					<li>
						<Link to="/All Search"> All Search</Link>
					</li>
					<li>
						<Link to="/Search DMC">Search DMC</Link>
					</li>
					<li>
						<Link to="/DMC">DMC Thread</Link>
					</li>
					{/* <li>
						<Link to="/Silks">Silk Thread</Link>
					</li> */}
					<li>
						<Link to="/Gloriana">Gloriana</Link>
					</li>
					<li>
						<Link to="/Dinky Dyes">Dinky Dyes</Link>
					</li>
					<li>
						<Link to="/Caron Waterlilies">Caron Waterlilies</Link>
					</li>
					<li>
						<Link to="/Thread Gatherer">Thread Gatherer</Link>
					</li>
					<li>
						<Link to="/Beads">Beads </Link>
					</li>
					<li>
						<Link to="/Metallics">Metallic Thread</Link>
					</li>
					<li>
						<Link to="/Chatelaine">Chatelaine</Link>
					</li>
				</ul>
			</div >
			<Switch>
				<Route path="/Bead Search" component={SearchBeads}>
				</Route>
				<Route path="/All Search" component={SearchCrafts}>
				</Route>
				<Route path="/Search DMC" component={SearchDMC}>
				</Route>
				<Route path="/DMC" component={DmcList}></Route>
				<Route path="/Chatelaine" component={ChatelaineList}></Route>
				<Route path="/Gloriana" component={GlorianaList}></Route>
				<Route path="/Dinky Dyes" component={DinkyList}></Route>
				<Route path="/Caron Waterlilies" component={CaronList}></Route>
				<Route path="/Thread Gatherer" component={TGList}></Route>
				<Route path="/Beads" component={BeadList}></Route>
				<Route path="/Metallics" component={MetallicList}></Route>
			</Switch>
		</Fragment >
	);
};

export default Header;
