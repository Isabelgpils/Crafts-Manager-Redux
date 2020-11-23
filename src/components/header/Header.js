import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import DmcList from '../threads/DmcList'
import BeadList from '../beads/BeadList';
import ChatelaineList from '../patterns/ChatelaineList';
import MetallicList from '../metallics/MetallicList';
import SearchMetallics from './SearchMetallics.js'
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
			{/* <div style={{ backgroundColor: "rgb(56,64,88)" }} className="nav-wrapper"> */}

			<div className="navbar-fixed">

				<nav>
					{/* <div style={{ marginLeft: '1px' }} className="brand-logo">
						<img src={Logo} alt="logo" width="10%"></img>
					</div> */}
					<ul id="silks" class="dropdown-content">
						<li><Link to="/Dinky Dyes">Dinky Dyes</Link>							</li>
						<li><Link to="/Gloriana">Gloriana</Link></li>
						<li><Link to="/Caron Waterlilies">Caron Waterlilies</Link></li>
						<li><Link to="/Thread Gatherer">Thread Gatherer</Link>></li>
					</ul>
					<ul id="search" class="dropdown-content">
						<li><Link to="/Search Beads">Search Beads</Link></li>
						<li><Link to="/Search Metallics">Search Metallics</Link></li>
						<li><Link to="/Search DMC">Search DMC</Link></li>
					</ul>
					{/* Dropdown Trigger */}

					<ul>
						<li><a class="dropdown-trigger" href="#!" data-target="search">
							Search<i class="material-icons right">arrow_drop_down</i></a></li>
					</ul>
					<ul class="right hide-on-med-and-down">
						<ul>
							<li><a class="dropdown-trigger" href="#!" data-target="silks">
								Silk Threads<i class="material-icons right">arrow_drop_down</i></a></li>
						</ul>
						{/* <li><Link to="/Search Beads">Search Beads</Link></li>
						<li><Link to="/Search Metallics">Search Metallics</Link></li>
						<li><Link to="/Search DMC">Search DMC</Link></li> */}
						<li><Link to="/DMC">DMC Thread</Link></li>
						<li><Link to="/Beads">Beads </Link></li>
						<li><Link to="/Metallics">Metallic Thread</Link></li>
						<li><Link to="/Chatelaine">Chatelaine</Link></li>


						<a href="/" data-target="mobile-nav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
					</ul>
					{/* hide on smaller screens */}
					<ul className="right hide-on-med-and-down" style={{ margin: '5px' }} >
						{/* <li>
								<Link to="/HOME">Home</Link>
							</li> */}
						{/* <li><Link to="/Search Beads">Search Beads</Link></li>
							<li><Link to="/Search Metallics">Search Metallics</Link></li>
							<li><Link to="/Search DMC">Search DMC</Link></li> */}
						{/* <li><Link to="/DMC">DMC Thread</Link></li> */}
						{/* <li> */}
						{/* <Link to="/Gloriana">Gloriana</Link>
							</li> */}
						{/* <li>
								<Link to="/Dinky Dyes">Dinky Dyes</Link>
							</li> */}
						{/* <li>
								<Link to="/Caron Waterlilies">Caron Waterlilies</Link>
							</li> */}
						{/* <li>
								<Link to="/Thread Gatherer">Thread Gatherer</Link>
							</li> */}
						{/* <li><Link to="/Beads">Beads </Link></li>
							<li><Link to="/Metallics">Metallic Thread</Link></li>
							<li><Link to="/Chatelaine">Chatelaine</Link></li> */}
					</ul>

					{/* side nav on smaller screens */}
					<ul className="sidenav" id="mobile-nav">
						<li><Link to="/Search Beads">Search Beads</Link></li>
						{/* <li><Link to="/Search Metallcs">Search Metallics</Link></li>
							<li><Link to="/Search DMC">Search DMC</Link></li> */}
						<li><Link to="/DMC">DMC Thread</Link></li>
						{/* <li><Link to="/Gloriana">Gloriana</Link></li>
							<li><Link to="/Dinky Dyes">Dinky Dyes</Link></li>
							<li><Link to="/Caron Waterlilies">Caron Waterlilies</Link></li>
							<li><Link to="/Thread Gatherer">Thread Gatherer</Link></li> */}
						<li><Link to="/Beads">Beads </Link></li>
						<li><Link to="/Metallics">Metallic Thread</Link></li>
						<li><Link to="/Chatelaine">Chatelaine</Link></li>
					</ul>
				</nav>
			</div>
			{/* </div> */}


			<Switch>
				<Route path="/Search Beads" component={SearchBeads}>
				</Route>
				<Route path="/Search Metallics" component={SearchMetallics}>
				</Route>
				<Route path="/Search DMC" component={SearchDMC}>
				</Route>
				<Route path="/DMC" component={DmcList}>
				</Route>
				<Route path="/Chatelaine" component={ChatelaineList}>
				</Route>
				<Route path="/Gloriana" component={GlorianaList}>
				</Route>
				<Route path="/Dinky Dyes" component={DinkyList}>
				</Route>
				<Route path="/Caron Waterlilies" component={CaronList}></Route>
				<Route path="/Thread Gatherer" component={TGList}></Route>
				<Route path="/Beads" component={BeadList}></Route>
				<Route path="/Metallics" component={MetallicList}></Route>
			</Switch>

		</Fragment >
	);
};

export default Header;
