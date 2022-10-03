import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieById } from "../stateManagement/actions/movies";
import Label from "../components/Label";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);

  const [favorite, setFavorite] = useState(false);
  const handleSetFavorite = () => {
    setFavorite(!favorite);
  };

  useEffect(() => {
    dispatch(getMovieById(movieID));
  }, [movieID, dispatch]);
  return (
    <div className="my-8 h-full">
      <Link to="/">
        <img src={`/assets/Icons/icon-arrow-grey.svg`} alt={"return"} />
      </Link>
      {movie.Title && (
        <div className="flex flex-col w-full  gap-4 py-4 items-top lg:flex-row lg:justify-between md:basis-3/5">
          <div className="flex flex-col gap-8">
            <p className="font-semibold text-md text-LIGHT_GREY">
              {`${movie.Runtime} · ${movie.Year} · `}
              <span className="bg-LIGHT_GREY text-DARK_GREY px-[2px] font-normal rounded">
                {movie.Rated}
              </span>
            </p>
            <h1 className="font-semibold text-7xl text-WHITE max-w-[580px]">
              {movie.Title}
            </h1>
            <div className="flex flex-col justify-start gap-2 md:flex-row">
              <Label
                info={`${movie.imdbRating}/10`}
                icon={"/assets/Logos/logo-imdb.svg"}
                color="bg-YELLOW"
              />
              <Label
                info={`${movie.Metascore} %`}
                icon={"/assets/Logos/logo-rotten-tomatoes.svg"}
                color="bg-RED"
              />
              <CustomButton
                title={favorite ? "Added" : "Add to favorite"}
                mainColor={favorite && "RED"}
                favorite={favorite}
                icon={
                  favorite
                    ? "/assets/Icons/icon-heart-full.svg"
                    : "/assets/Icons/icon-heart-grey.svg"
                }
                onClick={() => handleSetFavorite()}
              />
            </div>

            <div className="flex flex-col lg:max-w-[480px]">
              <p className="text-sm text-LIGHT_GREY"> Plot</p>
              <p className="text-base text-WHITE">{movie.Plot}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between lg:max-w-[480px] gap-4">
              <div className="flex flex-col">
                <p className="text-sm text-LIGHT_GREY"> Cast</p>
                <p className="text-base text-WHITE">{movie.Actors}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-LIGHT_GREY"> Genre</p>
                <p className="text-base text-WHITE">{movie.Genre}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-LIGHT_GREY"> Director</p>
                <p className="text-base text-WHITE">{movie.Director}</p>
              </div>
            </div>
          </div>
          <div className="grid lg:basis-2/5 place-items-center ">
            {movie.Poster !== "N/A" && (
              <img
                alt={`${movie.Title}`}
                src={movie.Poster}
                className="lg:w-[480px] max-h-[640px] rounded-md"
              />
            )}
            {movie.Poster === "N/A" && (
              <img
                alt={`${movie.Title}`}
                src={"/assets/Logos/logo-rotten-tomatoes.svg"}
                className="lg:w-[200px] max-h-[200px] "
              />
            )}
          </div>
        </div>
      )}
      {!movie.Title && (
        <div className="flex flex-col items-center justify-center h-[60%]">
          <img
            alt="empty"
            src={"/assets/Illustrations/illustration-empty-state.png"}
          />
          <p className="mt-2 text-[1.2rem] text-LIGHT_GREY text-center">
            Oops ! We can't find your movie in our list...
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
