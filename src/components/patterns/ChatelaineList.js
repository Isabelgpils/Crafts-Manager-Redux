import React from 'react';
import { Grid } from '@material-ui/core';
import ChatelaineItem from './ChatelaineItem';
import { chatelaine } from './chatelaine';

const ChatelaineList = (props) => {
	const allPatterns = chatelaine.map((pattern) => {
		return (
			<ChatelaineItem
				key={pattern.number}
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
	return (
		<Grid container direction="column">
			<Grid item>
				<Grid style={{ marginLeft: '50px' }} item container />
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container style={{ margin: "auto" }}>
						<h3 style={{ margin: "55px auto" }}>Chatelaine Patterns</h3>
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


export default ChatelaineList;
