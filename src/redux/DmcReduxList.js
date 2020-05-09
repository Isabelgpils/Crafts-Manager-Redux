import React from 'react';
import { connect } from 'react-redux';
import { selectDmc } from './actions';

const DmcList = ({ dmcs, selectDmc, state, renderList }) => {
	return dmcs.map((dmc) => {
		return (
			<div className="item" key={dmc.number}>
				<div className="right floated content">
					<button className="ui button primary" onClick={() => selectDmc(dmc)}>
						Select
						</button>
				</div>
				<div className="content" style={{ padding: '1rem', backgroundColor: `rgb(${dmc.rgb})` }}>
					<div>{dmc.number}</div>
					<div>{dmc.color}</div>
				</div>
				<div>{state}</div>
			</div>
		);
	});

}

const mapStateToProps = (state) => {
	console.log(state);
	return { dmcs: state.dmcs };
};
export default connect(mapStateToProps, { selectDmc: selectDmc })(DmcList);
