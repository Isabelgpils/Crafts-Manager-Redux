import React, { useState } from 'react';
// import { connect } from 'react-redux';

const SilkItem = (props) => {
	const [ select, setSelected ] = useState(false);

	const borderSize = select ? '8px solid green' : undefined;

	const fontColor = props.dark ? 'white' : 'lightBlack';
	// this will change the fontcolor
	return (
		<div>
			<div style={{ marginTop: '30px' }} className="ui cards">
				<div className="card" style={{ height: '300x', width: '250px', backgroundColor: `rgb(${props.rgb})` }}>
					<div className="content" style={{ border: borderSize }}>
						<h5 style={{ color: fontColor }}>{props.color}</h5>
						<h5 style={{ color: fontColor }}>
							{props.brand} {props.number}
						</h5>
						<h6 style={{ color: fontColor }}>DMC: {props.dmc}</h6>
						<button
							className="ui teal button"
							onClick={() => {
								console.log(`${props.number} was selected`);
								setSelected(!select);
							}}
						>
							Have
						</button>
						<button className="ui grey button">Need</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SilkItem;
// const mapStateToProps = (state) => {
// 	console.log(state);
// 	return {
// 		silks: state && state.selectedReducer && state.selectedReducer.selectSilk
// 		//if state is all of these things
// 	};
// };
// export default connect(mapStateToProps)(SilkItem);
