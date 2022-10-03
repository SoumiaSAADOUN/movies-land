import initialState from "./initialState";

const moviesReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case `GET_MOVIES_SEARCH_LIST_REQUEST`:
      return { ...state };
    case `GET_MOVIES_SEARCH_LIST_FULFILLED`:
      return { ...state, moviesList: action.payload.data.Search || [] , total: action.payload.data.totalResults || 0};

    case `GET_MOVIE_BY_ID_REQUEST`:
      return { ...state };
    case `GET_MOVIE_BY_ID_FULFILLED`:
      return { ...state, movie:action.payload.data || {} };

    
    case `SET_LOADING`:
      return { ...state, loading:action.payload };
    case `SET_EMPTY_LIST`:
      return { ...state, empty:action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
