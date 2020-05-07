import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const DmcDetail = ({ dmcs }) => {
	if (!dmcs) {
		return (
			<div>
				<h3>DMC Thread</h3>
			</div>
		);
	}
	return (
		<Fragment>
			{dmcs.map((dmc) => (
				<div key={dmc.number}>
					<h6>DMC {dmc.number}</h6>

					<div style={{ padding: '1rem', backgroundColor: `rgb(${dmc.rgb})` }} />
				</div>
			))}
		</Fragment>
	);
};
const mapStateToProps = (state) => {
	console.log(state);
	return {
		dmcs: state && state.selectedReducer && state.selectedReducer.selectDmc
		//if state is all of these things
	};
};
export default connect(mapStateToProps)(DmcDetail);
