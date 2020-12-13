import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TGList from "./TGList";

const ThreadItem = props => {
  // const threadBrand =
  //   props.brand == "Gloriana"
  //     ? "Glo"
  //     : props.brand == "Caron Waterlilies"
  //     ? "WL"
  //     : "TG";

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: "1rem",
      marginTop: "1rem",
      border: "solid grey 1px"
    },
    // maxWidth: 600,
    // margin: '25px',
    // marginTop: '25px',
    // border: 'solid grey 1px'
    media: {
      height: 300,
      width: 300,
      alignItems: "center"
    }
  });

  const classes = useStyles();
  // const fontColor = props.dark ? 'white' : 'lightBlack';
  // const cardColor = props.dmc === 'none' ? 'darkgrey' : `rgb(${props.rgb})`;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography
          style={{
            textAlign: "center",
            padding: "1%",
            color: "rgb(56,64,88)"
          }}
          variant="h5"
          component="h5"
        >
          {/* {threadBrand} */}
          {props.number}
        </Typography>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="silk threads"
        />
        <CardContent
          style={{
            textAlign: "center",
            height: "100px",
            width: "300px",
            backgroundColor: "rgb(56,64,88, .3)"
          }}
        >
          <Typography
            style={{ color: "rgb(56,64,88)" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {props.color}
          </Typography>
          {/* ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"]. */}

          <Typography
            style={{ marginTop: "1%", color: "rgb(56,64,88)" }}
            variant="subtitle1"
            component="h5"
          >
            {props.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" style={{ marginLeft: "5%" }}>
          In Stash
        </Button>
        <Button size="medium" style={{ marginLeft: "30%" }}>
          Need
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThreadItem;
