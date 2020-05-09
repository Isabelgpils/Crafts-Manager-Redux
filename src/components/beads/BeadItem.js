import React from 'react';

const BeadItem = (props) => {
	return (
		<div>
			<div className="ui cards">
				<div className="card" style={{ backgroundColor: 'whitesmoke' }}>
					<div className="content">
						<h5 className="card-title">Delica {props.number}</h5>
						<h6 style={{ color: 'red', margin: '10px' }}>{props.message}</h6>
						<img
							src={`https://www.fusionbeads.com/images/11DB${props.number}.MAIN.0.jpg?resizeid=2&resizeh=10&resizew=10`}
							alt="beads"
							style={{ margin: 'auto' }}
						/>
						<h6>Pattern: {props.patterns}</h6>
						{/* 
						<button className="ui small lightgrey button">Have</button>
						<button className="ui small ligtgrey button">Need</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeadItem;
