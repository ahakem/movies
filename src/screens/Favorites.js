import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "../components/MovieCard/index";
import { connect } from "react-redux";
import { unstarMovie } from "../store/movies/actions";

import { Link } from "react-router-dom";
const Favorites = (props) => {
  const { favoritesList, remove } = props;

  if (favoritesList.length === 0) {
    return (
      <center>
        <p>
          you don't have any Movie in your list, you can add one from{" "}
          <Link to="/"> Movies List</Link>{" "}
        </p>
      </center>
    );
  }
  return (
    <>
      <h1> My Favorits</h1>
      <Grid container spacing={4}>
        {favoritesList.map((movie) => (
          <MovieCard
            handleRemoveMovie={(id) => {
              remove(id);
            }}
            key={movie.id}
            movie={movie}
          />
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesList: [...state.movies.favoritMovies],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(unstarMovie(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
