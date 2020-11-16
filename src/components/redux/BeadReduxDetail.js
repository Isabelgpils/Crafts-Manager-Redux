import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const BeadDetail = ({ beads }) => {
	if (!beads) {
		return (
			<div>
				<h5>Beads</h5>
			</div>
		);
	}
	return (
		<Fragment>
			<div className="container">
				{beads.map((bead) => (
					<div key={`${bead.patterns}-${bead.number}`}>

						<h5>Delica {bead.number}</h5>
						<h6>Pattern: {bead.patterns}</h6>
						<img
							// link to Fusionbeads for images
							// src={`https://www.fusionbeads.com/images/11DB${bead.number}.MAIN.0.jpg?resizeid=2&resizeh=10&resizew=10`}
							src={`https://image1.fmgstatic.com/images/seed-bead-delica-glass-opaque-black-db${bead.number}-11-round-sold-per-75-gram-p---pdb${bead.number}vb(5).jpg`}
							alt="beads"
							style={{ margin: 'auto' }}
							height="150%"
							width="150%"
						/>
					</div>
				))}
			</div>
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
