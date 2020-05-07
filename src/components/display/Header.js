import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Fragment>
			<div className="navbar-fixed">
				<nav>
					<div style={{ backgroundColor: 'teal' }} className="nav-wrapper">
						<div style={{ marginLeft: '2px' }}>
							<a href="#!" className="brand-logo">
								My Craft Manager
							</a>
						</div>

						<a href="#" data-target="mobile-nav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							{/* <li>
								<Link to="/SearchAll">SearchAll</Link>
							</li> */}
							<li>
								<Link to="/Home">Home</Link>
							</li>
							<li>
								<Link to="/SearchAll">Search All </Link>
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
								<Link to="/DMCRedux">DMC Redux</Link>
							</li>
							<li>
								<Link to="/BeadsRedux">BeadsRedux</Link>
							</li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav" id="mobile-nav">
					<li>
						<Link to="/Home">Home</Link>
					</li>
					<li>
						<Link to="/SearchAll">Search All </Link>
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
						<Link to="/DMCRedux">DMC Redux</Link>
					</li>
					<li>
						<Link to="/BeadsRedux">BeadsRedux</Link>
					</li>
					<li>
						<Link to="/Material">Material</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Header;
