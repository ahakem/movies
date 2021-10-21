import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Movies
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};
export default Layout;
