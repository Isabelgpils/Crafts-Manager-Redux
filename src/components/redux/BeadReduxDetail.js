import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const BeadDetail = ({ beads }) => {
	if (!beads) {
		return (
			<div>
				<h5>View Detail</h5>
			</div>
		);
	}
	return (
		<Fragment>
			{beads.map((bead) => (
				<div key={`${bead.number}-${bead.patterns}`}>

					<h5>Delica {bead.number}</h5>
					<h6>Pattern: {bead.patterns}</h6>
					<img
						// link to Fusionbeads for images
						src={`https://www.fusionbeads.com/images/11DB${bead.number}.MAIN.0.jpg?resizeid=2&resizeh=10&resizew=10`}
						alt="beads"
						style={{ margin: 'auto' }}
						height="70%"
						width="70%"
					/>
				</div>
			))}
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		beads: state && state.selectedReducer && state.selectedReducer.selectBead
		//if state is all of these things
	};
};
export default connect(mapStateToProps)(BeadDetail);
