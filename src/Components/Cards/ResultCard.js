import React from "react";
import fakeposter from "../../img/fakeposter.png";
import "./Cards.css";

export const ResultCard = ({ movie }) => {
  return (
    <div className="result-card">
      {movie.poster_path ? (
        <div>
          <img
            className="real-poster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
      ) : (
        <div className="filler-poster">
          <img className="filler-poster" src={fakeposter} alt="No Poster" />
        </div>
      )}
    </div>
  );
};
