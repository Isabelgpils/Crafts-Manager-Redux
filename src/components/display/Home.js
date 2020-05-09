import React, { Fragment } from 'react';
import dragonfly from '../patterns/images/dragonfly2.jpg';
import dmcPic from './karly-santiago-E7zsz8JA8FM-unsplash.jpg'
import dmcPic2 from './mel-poole-4J1sjmMr0Ro-unsplash.jpg'

const Home = () => {
	return (
		<Fragment>
			<div style={{ height: '600px' }} className="parallax-container">
				<div className="parallax">
					<img src={dragonfly} alt="dragonfly cross stitch" />
					{/* Photo by Mel Poole on Unsplash */}
				</div>
			</div>
			<div style={{ color: 'teal', margin: 'center', height: '300px' }} className="white">
				<div className="row container azure" >

					<h3 className="header" >Spend less time organizing and more time creating</h3>
					<h5 className="header">Search threads, beads and patterns and organize projects</h5>

					<img src={dmcPic} align="floatLeft" alt="dmc thread" height="15%" width="15%" style={{ margin: "15px", border: "solid 5px grey" }} />
					<img src="https://www.fusionbeads.com/images/11DB0871.MAIN.0.jpg?resizeid=2&resizeh=10&resizew=10" alt="beads" height="15%" width="15%" style={{ margin: "15px", border: "solid 5px grey" }} />
					{/* Photo by Karly Santiago on Unsplash */}
				</div>
			</div>
			<div style={{ height: '500px' }} className="parallax-container">
				<div className="parallax">
					<img src={dmcPic} alt="dragonfly cross stitch" />
				</div>
			</div>

		</Fragment>
	);
};

export default Home;
