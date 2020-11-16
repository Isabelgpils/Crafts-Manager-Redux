import React from 'react';
import { Grid } from '@material-ui/core';
import GlorianaItem from './GlorianaItem';
import { gloriana } from './gloriana';


const GlorianaList = () => {
	const sortedGloriana = gloriana.sort((a, b) => a.number - b.number);
	const allSilks = sortedGloriana.map((silk) => {
		return (
			<GlorianaItem
				key={`${silk.brand} ${silk.color}`}
				brand={silk.brand}
				number={silk.number}
				color={silk.color}
				rgb={silk.rgb}
				dmc={silk.dmc}
				dark={silk.dark}
				image={silk.image}
			/>
		);
	});

	return (
		<Grid container direction="column">
			<div className="row">
				<div className="col s12"><h3 style={{ marginTop: "55px" }} className="center-align">Gloriana Silk Threads</h3></div>
			</div>
			<Grid item>
				<Grid style={{ margin: '10px' }} item container />
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container>
						{allSilks}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};

export default GlorianaList;
