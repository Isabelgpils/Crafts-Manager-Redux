import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';

const Content = () => {
	return (
		<Grid container>
			<Grid item xs={4}>
				<Card />
			</Grid>
		</Grid>
	);
};
export default Content;
