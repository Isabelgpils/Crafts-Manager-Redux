import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const MiraItem = (props) => {

	const useStyles = makeStyles({
		root: {
			maxWidth: 1050,
			margin: 'auto',
			border: 'solid grey 1px',
			marginTop: "25px"
		},
		media: {
			height: 500,
			width: 500,
			padding: "0px"
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
				<CardMedia style={{ display: "inline-block" }} className={classes.media} image={props.image} title={props.name} />
				<CardMedia style={{ display: "inline-block" }} className={classes.media} image={props.thumbnail} title={props.name} />
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

export default MiraItem;
// return (
// 	<div className="card">
// 		<div className="card-image">
// 			<img src={props.image} alt="patterns" />
// 			<span className="card-title" />
// 		</div>
// 		<div className="card-content">
// 			<p>

// 			</p>
// 		</div>
// 	</div>
//  <div style={{ marginTop: '20px' }} className="ui cards">
// 		<div className="card" style={{ backgroundColor: 'whitesmoke' }}>
// 			<div className="content">
// 				<h5>
// 					{props.name} - {props.brand}{' '}
// 				</h5>
// 				<img
// 					className="ui centered image"
// 					style={{ border: '8px solid darkGrey' }}
// 					src={props.image}
// 					alt="pattern"
// 				/>
// 			</div>
// 		</div>
// 	</div>
