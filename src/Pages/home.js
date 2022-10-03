import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { PUBLIC_URL } from "../constants/global";
import { Link } from "react-router-dom";

const Home = () => {
  const moviesList = useSelector((state) => state.movies.moviesList);
  const loading = useSelector((state) => state.movies.loading);
  const empty = useSelector((state) => state.movies.empty);

  return (
    <div className="flex flex-col items-center h-full gap-8">
      <div className="w-full">
        <SearchBar />
      </div>
      {moviesList.length === 0 && !loading && !empty && (
        <div className="flex flex-col items-center justify-center h-[60%]">
          <img
            src={`${PUBLIC_URL}/assets/Illustrations/illustration-empty-state.png`}
            alt="empty preview"
          />
          <p className="mt-2 text-xl font-bold text-WHITE">
            Don't know what to search?
          </p>
          <p className="text-sm text-LIGHT_GREY ">
            Here's an offer you can't refuse
          </p>
        </div>
      )}
      {moviesList && moviesList.length > 0 && (
        <div className="grid bg-DARK_GREY flex-wrap grid-cols-1 gap-2 xl:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
          {moviesList.map((movie, index) => (
            <Link to={`/${movie.imdbID}`} key={`movie-${index}-`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      )}
      {loading && (
        <svg
          className="animate-spin h-60 w-60 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      )}
      {empty && moviesList.length === 0  &&(
        <div className="flex flex-col items-center justify-center h-[50%]">
          <img alt='empty' src={'/assets/Illustrations/empty.png'} className="w-36 fill-LIGHT_GREY "/>
          <p className="mt-2 text-xl text-LIGHT_GREY">
            Oops ! May be you should refine your search ...
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
