import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../assets/headshot.JPG";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt='Manny Parra' src='../assets/headshot.JPG' />
    </div>
  );
}

export default ImageAvatar;
