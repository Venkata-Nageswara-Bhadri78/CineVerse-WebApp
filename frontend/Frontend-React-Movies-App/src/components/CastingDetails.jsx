import React from 'react'
import { useMovieDetails } from '../API/Tmdb';
import DefaultCastImage from '../ui/DefaultCastImage';

// const baseImageLink = "https://image.tmdb.org/t/p/w300";


const CastingDetails = ({ type, movieId }) => {
  const { movie, err, load } = useMovieDetails({ type: 'movie', movieId: movieId, credits: "/credits" });

  if (load || !movie || movie.length === 0) return null;

  // Show only top 12 cast members
  const topCast = movie.slice(0, 12);

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-indigo-500 pl-4">Top Billed Cast</h2>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar snap-x">
        {topCast.map(cast => (
          <div 
            className="flex-shrink-0 w-32 md:w-40 bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden snap-start transition-all hover:shadow-md hover:-translate-y-1" 
            key={cast.id}
          >
            <div className="aspect-[3/4] overflow-hidden">
              {cast.profile_path ? (
                <img 
                  className="w-full h-full object-cover" 
                  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} 
                  alt={cast.name} 
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <DefaultCastImage name={cast.name} />
                </div>
              )}
            </div>
            <div className="p-3">
              <div className="text-xs md:text-sm font-bold text-gray-900 truncate">{cast.name}</div>
              <div className="text-[10px] md:text-xs text-gray-500 truncate mt-0.5">{cast.character}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastingDetails;

