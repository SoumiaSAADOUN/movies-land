import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesList,
  setLoading,
  setEmptyList,
} from "../stateManagement/actions/movies";
const SearchBar = () => {
  const dispatch = useDispatch();

  const moviesList = useSelector((state) => state.movies.moviesList);
  const handleSearch = (e) => {
    dispatch(setLoading(true));
    dispatch(getMoviesList(e.target.value)).then(() => {
      dispatch(setLoading(false));
      dispatch(setEmptyList(false));
      if (moviesList.length === 0 && e.target.value.length > 0) {
        dispatch(setEmptyList(true));
      } else {
        dispatch(setEmptyList(false));
      }
    }).catch(()=>{
      alert("Oops!  We didn't get the list :(. Please try again later :) ")
    });
  };
  return (
    <>
      <div className="relative h-[44px] items-center justify-center ">
        <div className="flex absolute inset-y-2 left-0  pl-[3px] pointer-events-none">
          <img
            src={`/assets/Icons/icon-magnifier-grey_preview_rev_1.png`}
            className="m-[12px] h-[16px] w-[16px]"
            alt="search icon"
          />
        </div>
        <input
          type="text"
          placeholder={"Search movies..."}
          id="searchInput"
          className=" w-full my-2 border rounded-md py-[8px] pr-[16px] pl-10 bg-WHITE"
          name="searchKeyword"
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
