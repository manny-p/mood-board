import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
}));

export default function Footer(props) {
  return (
    <AppBar>
      <Toolbar>Footer</Toolbar>
    </AppBar>
  );
}
