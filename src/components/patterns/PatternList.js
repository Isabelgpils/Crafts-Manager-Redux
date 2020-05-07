import React from 'react';
import { Grid } from '@material-ui/core';
import PatternItem from './PatternItem';
import { patterns } from './patterns';

const PatternList = (props) => {
	const allPatterns = patterns.map((pattern) => {
		return (
			<PatternItem
				key={pattern.name}
				name={pattern.name}
				image={pattern.image}
				brand={pattern.brand}
				silks={pattern.silks}
			/>
		);
	});

	return (
		<Grid container direction="column">
			<Grid item container>
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container>
						{allPatterns}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};

export default PatternList;
