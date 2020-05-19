import React, { Fragment } from 'react';
import dragonfly from '../patterns/images/dragonfly2.jpg';
import dmcPic from './karly-santiago-E7zsz8JA8FM-unsplash.jpg'
import dmcPic2 from './mel-poole-4J1sjmMr0Ro-unsplash.jpg';




const Home = () => {
	return (
		<Fragment>


			<div style={{ height: '800px' }} className="parallax-container">
				<div className="parallax">
					<img src={dmcPic} alt="dmc thread" />
					{/* Photo by Mel Poole on Unsplash */}
				</div>
			</div>
			<div style={{ color: 'teal', margin: 'center', height: '100px' }} className="white">
				<div className="row container azure" >

					<h3 className="header" >Spend less time organizing and more time creating</h3>
					<h5 className="header">Search threads, beads and patterns and organize projects</h5>

				</div>
			</div>

		</Fragment>
	);
};

export default Home;
