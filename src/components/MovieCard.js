import React from "react";
const MovieCard = (props) => {
    
  return (
    <div  className={`relative  group hover:cursor-pointer w-[180px] h-[240px] rounded`}>
      <img
        src={props.movie.Poster}
        alt={props.movie.Title}
        className="w-[180px] h-[240px] rounded"
      />
      <div className={`absolute top-0 flex flex-col w-full h-full block ${props.movie.Poster!=="N/A" && 'md:hidden'} p-4 rounded bg-GREY/80 group-hover:block`}>
        <img
          src={`/assets/Icons/icon-heart-white.svg`}
          className="absolute top-2 right-2 h-[20px] w-[20px]"
          alt='like heart'
        />
        <div className="absolute flex flex-col bottom-2 left-2 ">
          <p className="font-medium text-md text-WHITE">
            {props.movie.Title}
          </p>
          <p className="text-sm text-WHITE">{props.movie.Year}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
