import React, { useState } from 'react';
// import { connect } from 'react-redux';

const SilkItem = (props) => {
	const [select, setSelected] = useState(false);

	const borderSize = select ? '8px solid green' : undefined;

	const fontColor = props.dark ? 'white' : 'lightBlack';
	const cardColor = props.dmc === 'none' ? 'lightGrey' : `rgb(${props.rgb})`

	// this will change the fontcolor
	return (
		<div style={{ paddingRight: '1px', margin: '20px' }}>
			<div className="ui cards">
				<div className="card" style={{ height: '180px', width: '220px', backgroundColor: cardColor }}>
					<div className="content">
						<h6 style={{ color: fontColor }}>{props.brand} </h6>
						{/* Change the text color to light */}
						<h5 style={{ color: fontColor, fontFamily: 'Calibri' }}>{props.color}</h5>
						<br />
						<h6 style={{ color: fontColor }}>DMC substitute: {props.dmc}</h6>


						{/* <button
							className="ui teal button"
							onClick={() => {
								console.log(`${props.number} was selected`);
								setSelected(!select);
							}}
						>
							Have
						</button>
						<button className="ui grey button">Need</button> */}
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
