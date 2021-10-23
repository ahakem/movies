import React  from "react";
import { Grid } from "@mui/material";
import MovieCard from "../componenets/MovieCard/index";
import { connect } from "react-redux";
import {  unstarMovie } from "../store/movies/actions";
const Favorites = (props) => {
  const { favoritesList, remove } = props;

  if (!favoritesList) {
    return <h1>loading...</h1>;
  }
  return (
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
