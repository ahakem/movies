export const moviesActionTypes = {
    INIT_MOVIES: 'INIT_MOVIES',
    STAR_MOVIE: 'STAR_MOVIE',
    UNSTAR_MOVIE: 'UNSTAR_MOVIE',
  }
  
  export const initMovies = (data) => {
    return { 
      type: MoviesActionTypes.INIT_MOVIES,
      data: data,
    }
  }
  
  export const starMovie = (data) => {
    return { 
      type: MoviesActionTypes.STAR_MOVIE,
      data: data,
    }
  }

  export const unstarMovie = (data) => {
    return { 
      type: MoviesActionTypes.UNSTAR_MOVIE,
      data: data,
    }
  }
  
 