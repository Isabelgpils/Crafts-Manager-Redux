import React from 'react';
import { Grid } from '@material-ui/core';
import MiraItem from './MiraItem';
import { mirabilia } from './mirabilia.js';

const MiraList = (props) => {
	const allPatterns = mirabilia.map((pattern) => {
		return (
			<MiraItem
				key={pattern.name}
				name={pattern.name}
				image={pattern.image}
				brand={pattern.brand}
				silks={pattern.silks}
				thumbnail={pattern.thumbnail}
				number={pattern.number}
				size={pattern.size}
			/>
		);
	});

	// 	return (
	// 		<Grid container direction="column">
	// 			<Grid item container>
	// 				<Grid item xs={false} sm={2} />
	// 				{/* on xsmall screens=no gutter  */}
	// 				<Grid item xs={12}>
	// 					<Grid item container>
	// 						{allPatterns}
	// 					</Grid>
	// 				</Grid>
	// 				<Grid item xs={false} sm={2} />
	// 			</Grid>
	// 		</Grid>
	// 	);
	// };
	return (
		<Grid container direction="column">
			{/* <div className="row">
			<div className="col s12"><h3 style={{ marginTop: "55px" }} className="center-align">Caron Waterlilies Silk Thread</h3></div>
		</div> */}
			<Grid item>
				<Grid style={{ margin: '10px' }} item container />
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container style={{ margin: "auto" }}>
						<h3 style={{ margin: "55px auto" }}>Cross Stitch Patterns</h3>
					</Grid>
					<Grid item container>
						{allPatterns}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};


export default MiraList;
