import React from 'react';
import { Grid } from '@material-ui/core';
import DmcItem from './DmcItem';
import { dmcThreads } from './dmc';


const DmcList = (props) => {
	const sortedDMC = dmcThreads.sort((a, b) => (a.dmc - b.dmc))
	const allThreads = sortedDMC.map((thread) => {
		return <DmcItem
			key={thread.dmc}
			dmc={thread.dmc}
			color={thread.color}
			rgb={thread.rgb}
			dark={thread.dark}
			image={thread.image} />;
	});

	return (
		<Grid container direction="column" >
			<div className="row">
				<div className="col s12"><h3 style={{ marginTop: "55px" }} className="center-align">DMC Cotton Thread</h3></div>
			</div>
			<Grid item>
				<Grid item container style={{ marginLeft: '25, 50px' }} />
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container>
						{allThreads}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>

		</Grid>
	);
};

export default DmcList;
