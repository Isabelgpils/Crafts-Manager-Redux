import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Inventory from '../Inventory';


const DinkyItem = (props) => {
	const useStyles = makeStyles({
		root: {
			maxWidth: 300,
			margin: '25px',
			marginTop: '25px',
			border: 'solid grey 1px'

		},
		media: {
			height: 130,
			width: 300,
			alignItems: "center"
			// border: 'solid grey 3px'
		},

	});

	// export default function patternMedia() {
	const classes = useStyles();
	// const fontColor = props.dark ? 'white' : 'lightBlack';
	// const cardColor = props.dmc === 'none' ? 'darkgrey' : `rgb(${props.rgb})`;
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<	Typography style={{ textAlign: "center", padding: "15px", color: "rgb(56,64,88)" }} variant="h4" component="h4">
					DD{props.number}
				</Typography>
				<CardMedia className={classes.media} image={props.image} title="silk threads" />
				<CardContent style={{ textAlign: "center", height: '150px', width: '300px', backgroundColor: "rgb(56,64,88, .3)" }} >
					<Typography style={{ color: "rgb(56,64,88)" }} gutterBottom variant="h5" component="h5">
						{props.color}
					</Typography>
					<Typography style={{ marginTop: "10px", color: "rgb(56,64,88)" }} variant="h6" component="h6">
						{props.brand}
					</Typography >
				</CardContent>
			</CardActionArea>
			<CardActions >
				{/* <Button size="medium" style={{ marginLeft: "25px" }} >
					In Stash
				</Button>
				<Button size="medium" style={{ marginLeft: "85px" }} >
					Need
				</Button> */}
				<Inventory />
			</CardActions>
		</Card>
	);
};

export default DinkyItem;

