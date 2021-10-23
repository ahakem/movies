import React from "react";

import Container from "@mui/material/Container";

import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router-dom";
const Layout = (props) => {
  const { children } = props;
  const [value, setValue] = React.useState(0);
  return (
    <>
      <main>
        <Container sx={{ marginTop: 4, marginBottom: 12 }} maxWidth="xl">
          {children}
        </Container>
      </main>
      <Paper
        sx={{ zIndex: 1, position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Now Playing"
            icon={<MovieIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/fav"
            label="Favorites"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
export default Layout;
