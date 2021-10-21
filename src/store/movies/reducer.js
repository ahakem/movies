import { moviesActionTypes } from "./actions";

const movies = (
  state = { moviesList: [], favoritMovies: [] },
  action
) => {
    
  switch (action.type) {
    case moviesActionTypes.INIT_MOVIES:
        return {
            ...state,
            moviesList: [...action.data],
          };

      case moviesActionTypes.STAR_MOVIE:
      return {
        //
      };

      case moviesActionTypes.UNSTAR_MOVIE:
      return {
        //
      };


 

    default:
      return state;
  }
};

export default movies;