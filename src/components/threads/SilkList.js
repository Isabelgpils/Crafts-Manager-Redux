import React from 'react';
import { Grid } from '@material-ui/core';
import SilkItem from './SilkItem';
import { silks } from './silks';


const SilkList = () => {
	const allSilks = silks.map((silk) => {
		return (
			<SilkItem
				key={`${silk.brand} ${silk.color}`}
				brand={silk.brand}
				number={silk.number}
				color={silk.color}
				rgb={silk.rgb}
				dmc={silk.dmc}
				dark={silk.dark}
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
						{allSilks}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};

export default SilkList;
