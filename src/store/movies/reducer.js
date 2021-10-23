import { moviesActionTypes } from "./actions";

const movies = (state = { moviesList: [], favoritMovies: [] }, action) => {
  switch (action.type) {
    case moviesActionTypes.INIT_MOVIES:
      return {
        ...state,
        moviesList: [...action.data],
      };

    case moviesActionTypes.STAR_MOVIE:
      const cloneArrayStar = JSON.parse(JSON.stringify(state));
      const index = cloneArrayStar.moviesList.findIndex(
        (movie) => movie.id === action.data
      );
      cloneArrayStar.moviesList[index].favorit = true;
      return {
        ...cloneArrayStar,
        favoritMovies: [
          ...cloneArrayStar.favoritMovies,
          cloneArrayStar.moviesList[index],
        ],
      };

    case moviesActionTypes.UNSTAR_MOVIE:
      const cloneArrayUnstar = JSON.parse(JSON.stringify(state));
      const indexToRemove = cloneArrayUnstar.moviesList.findIndex(
        (movie) => movie.id === action.data
      );
      cloneArrayUnstar.moviesList[indexToRemove].favorit = false;
      return {
        ...cloneArrayUnstar,
        favoritMovies: cloneArrayUnstar.favoritMovies.filter(
          (movie) => movie.id !== action.data
        ),
      };

    default:
      return state;
  }
};

export default movies;
