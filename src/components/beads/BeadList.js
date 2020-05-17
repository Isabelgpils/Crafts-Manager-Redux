import React from 'react';
import { Grid } from '@material-ui/core';
import BeadItem from './BeadItem';

import { beads } from './beads';

const BeadList = () => {
	const allBeads = beads.map((bead) => {
		return (
			<BeadItem
				key={`${bead.number}-${bead.patterns}`}
				number={bead.number}
				patterns={bead.patterns}
				message={bead.message}
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
							{allBeads}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={2} />
				</Grid>
			</Grid>
		</Grid>

	);
};

export default BeadList;
