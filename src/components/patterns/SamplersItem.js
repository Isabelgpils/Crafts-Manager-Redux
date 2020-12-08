import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const SamplersItem = (props) => {

	const useStyles = makeStyles({
		root: {
			maxWidth: 750,
			margin: 'auto',
			border: 'solid grey 1px',
			marginTop: 50
		},
		media: {
			height: 350,
			width: 350
		}
	});

	// export default function patternMedia() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Typography style={{ textAlign: "center", margin: "15px 5px" }} gutterBottom variant="h5" component="h5">
					{props.name}
				</Typography>

				<CardMedia style={{ display: "inline-block" }} className={classes.media} image={props.thumbnail} title={props.name} />
				<CardMedia style={{ display: "inline-block" }} className={classes.media} image={props.image} title={props.name} />
				<CardContent style={{ backgroundColor: "lightGrey" }}>
					<Typography gutterBottom variant="h5" component="h5">
						{props.brand} {props.number}
					</Typography>
					<Typography variant="h6" color="textSecondary" component="h6">
						Size: {props.size} stitches
					</Typography>

				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="large" color="primary">
					in progress
				</Button>
				<Button size="large" color="primary">
					Finished
				</Button>
			</CardActions>
		</Card>
	);
};

export default SamplersItem;
