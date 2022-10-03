import omdbapi from "../../api/omdbAPI";
import { omdbapiKey } from "../../constants/global";

export function getMoviesList(keyword) {
    return {
      type: "GET_MOVIES_SEARCH_LIST",
      payload: omdbapi.get(
        `?s=${keyword}&apikey=${omdbapiKey}`
      ),
    };
  }

  export function getMovieById(id){
    return {
      type: "GET_MOVIE_BY_ID",
      payload: omdbapi.get(
        `?i=${id}&apikey=${omdbapiKey}`
      ),
    };
  }
  export function setLoading(loading){
    return {
      type: "SET_LOADING",
      payload: loading,
    };
  }
  export function setEmptyList(empty){
    return {
      type: "SET_EMPTY_LIST",
      payload: empty,
    };
  }