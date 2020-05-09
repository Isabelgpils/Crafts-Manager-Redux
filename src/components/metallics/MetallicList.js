import React from 'react';
import { Grid } from '@material-ui/core';
import MetallicItem from './MetallicItem';
import { metallics } from './metallics';


const MetallicList = (props) => {
	const allMetallics = metallics.map((metallic) => {
		return (
			<MetallicItem
				key={`${metallic.patterns}${metallic.type}${metallic.number}`}
				type={metallic.type}
				number={metallic.number}
				color={metallic.color}
				patterns={metallic.patterns}
			/>
		);
	});
	return (
		<Grid container direction="column">
			<Grid container direction="column">
				<Grid item>
					<Grid style={{ margin: '10px' }} item container />
					<Grid item xs={false} sm={2} />
					{/* on xsmall screens=no gutter  */}
					<Grid item xs={12}>
						<Grid item container>
							{allMetallics}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={2} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MetallicList;
