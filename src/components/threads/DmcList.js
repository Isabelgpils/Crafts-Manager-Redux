import React from 'react';
import { Grid } from '@material-ui/core';
import DmcItem from './DmcItem';
import { dmcThreads } from './dmc';


const DmcList = () => {
	const allThreads = dmcThreads.map((thread) => {
		return <DmcItem key={thread.dmc} dmc={thread.dmc} color={thread.color} rgb={thread.rgb} dark={thread.dark} />;
	});

	return (
		<Grid container direction="column">
			<Grid item>
				<Grid style={{ margin: '10px' }} item container />
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
