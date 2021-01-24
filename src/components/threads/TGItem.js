import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const TGItem = (props) => {
	const useStyles = makeStyles({
		root: {
			maxWidth: 300,
			marginLeft: '30px',
			marginTop: '25px'
		},
		media: {
			height: 200,
			width: 200,
			border: 'solid white 3px'
		}
	});

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Typography style={{ textAlign: "center", padding: "15px", color: "rgb(56,64,88)" }} variant="h4" component="h4">
					TG {props.number}
				</Typography>
				<CardMedia className={classes.media} image={props.image} title="silk threads" />
				<CardContent style={{ margin: '5px', height: '130px', width: '200px', backgroundColor: cardColor }} >
					<Typography style={{ color: fontColor }} gutterBottom variant="h5" component="h2">
						{props.color} {props.number}
					</Typography>
					<Typography style={{ color: fontColor }} variant="body5" color="textPrimary" component="h6">
						{props.brand}
					</Typography>
					<Typography style={{ color: fontColor }} variant="body5" color="textPrimary" component="p">
						DMC Substitute: {props.dmc}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Inventory />
			</CardActions>
		</Card>
	);
};

export default TGItem;
