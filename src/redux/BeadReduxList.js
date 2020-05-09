import React from 'react';
import { connect } from 'react-redux';
import { selectBead } from './actions';

const BeadList = ({ beads, selectBead, state, renderList }) => {
	return beads.map((bead) => {
		return (
			<div className="item" key={bead.number}>
				<div className="right floated content">
					<button
						style={{ color: 'navy' }}
						className="ui button white"
						onClick={() => selectBead(bead)}
					>
						View Detail
						</button>
				</div>
				<div className="content" style={{ padding: '1rem' }}>
					<div>
						<h6>Delica {bead.number}</h6>
					</div>
					<img
						//link to FusionBeads for images 
						src={`https://www.fusionbeads.com/images/11DB${bead.number}.MAIN.0.jpg?resizeid=2&resizeh=10&resizew=10`}
						alt="beads"
						height="30%"
						width="30%"
						style={{ margin: 'auto' }}
					/>
				</div>
				<div>{state}</div>
			</div>
		);

	});
}
const mapStateToProps = (state) => {
	console.log(state);
	return { beads: state.beads };
};
export default connect(mapStateToProps, { selectBead: selectBead })(BeadList);
