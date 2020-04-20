import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "@material-ui/core/Footer";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
}));

export default function Footer(props) {
  return (
    <Footer position='fixed'>
      <Toolbar>Footer</Toolbar>
    </Footer>
  );
}
