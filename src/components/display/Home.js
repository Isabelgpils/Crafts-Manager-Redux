import React, { Fragment } from 'react';
import dragonfly from '../patterns/images/dragonfly2.jpg';


const Home = () => {
	return (
		<Fragment>
			<div style={{ height: '600px' }} className="parallax-container">
				<div className="parallax">
					<img src={dragonfly} alt="dragonfly cross stitch" />
				</div>
			</div>
			<div style={{ color: 'white', margin: 'center', height: '180px' }} className="dark teal">
				<div className="row container azure">
					<h3 className="center header" >Spend less time organizing and more time creating</h3>
					<h5 className="center header">Search threads, beads and patterns and organize projects</h5>
				</div>
			</div>
			<div style={{ height: '500px' }} className="parallax-container">
				<div className="parallax">
					<img src={dragonfly} alt="dragonfly cross stitch" />
				</div>
			</div>

		</Fragment>
	);
};

export default Home;
