import React from 'react'
import { useMovieDetails } from '../API/Tmdb';

const baseImageLink = "https://image.tmdb.org/t/p/w300";

const CastingDetails = ({ type, movieId }) => {
  const { movie, err, load } = useMovieDetails({ type: 'movie', movieId: movieId, credits: "/credits" });

  return (
    <div className="md:p-6">
      <h1 className="px-6 text-3xl underline">Top Billed Cast </h1>

      <div className="flex overflow-x-auto space-x-4 p-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {movie.map(cast => (
          <div 
            className="flex-shrink-0 w-40 shadow-2xl rounded-xl" 
            key={cast.id}
          >
            <div>
              <img 
                className="rounded-t-xl w-full" 
                src={`${baseImageLink}${cast.profile_path}`} 
                alt={`${cast.name}'s Image`} 
              />
            </div>
            <div className="p-4 rounded-b-xl">
              <div className="text-sm font-semibold truncate">{cast.name}</div>
              <div className="text-sm text-gray-600">{cast.character}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastingDetails;
