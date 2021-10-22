import React, { useEffect } from "react";
import axios, { API } from "../config/axios";
import {
  Grid,
} from "@mui/material";
import MovieCard from '../componenets/MovieCard/index'
import { connect } from "react-redux";
import { initMovies, starMovie, unstarMovie } from "../store/movies/actions";
const Movies = (props) => {
  const { init, moviesList } = props;
  useEffect(() => {
    axios
      .get(API.movies("now_playing"))
      .then(function (response) {
        // handle success
        init(response.data.results);
        console.table(response.data.results[0])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    console.log(process.env.REACT_APP_THE_MOVIE_DB_KEY);
  }, []);

  if (!moviesList) {
    return <h1>loading...</h1>;
  }
  return (
    <Grid container spacing={4}>
      {moviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesList: [...state.movies.moviesList],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    init: (data) => dispatch(initMovies(data)),
    add: (data) => dispatch(starMovie(data)),
    remove: (id) => dispatch(unstarMovie(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
