import React from 'react';
import { connect } from 'react-redux';
import { selectDmc } from './actions';

const DmcList = ({ dmcs, selectDmc, state, renderList }) => {
	return dmcs.map((dmc) => {
		return (
			<div className="item" key={dmc.number}>
				<div className="right floated content">
					<button className="ui button" onClick={() => selectDmc(dmc)}>
						View Detail
						</button>
				</div>
				<div className="content" style={{ padding: '1rem', backgroundColor: `rgb(${dmc.rgb})` }}>
					<h6>{dmc.dmc}</h6>
					<h6>{dmc.color}</h6>
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


