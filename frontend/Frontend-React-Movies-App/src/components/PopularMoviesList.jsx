import React from 'react';
import {usePopularMovies} from '../API/Tmdb';
import RoundProgress from '../ui/RoundProgress';
import MovieCard from './MovieCard';

const extrasInURL = '&language=en-US';
const baseLink = import.meta.env.VITE_BASELINK;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const PopularMoviesList = ({pageStyle, page=1}) => {
  const {popular, error, loading } = usePopularMovies({page});

  return (
    <div>
      <div className='p-4 bg-gray-300 text-xl'>Popular Movies</div>
      <div 
      className={`flex flex-row overflow-x-auto px-4 gap-3 bg-gray-300`}
      >
          {popular.map(movie => {
              return(
                <MovieCard key={movie.id} movie={movie} />
              )
          })}
      </div>
    </div>
  )
}

export default PopularMoviesList
