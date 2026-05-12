import React from 'react';
import {usePopularMovies} from '../API/Tmdb';
import RoundProgress from '../ui/RoundProgress';
import MovieCard from './MovieCard';
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton';
import MoviesList from './MoviesList';

const extrasInURL = '&language=en-US';
const baseLink = import.meta.env.VITE_BASELINK;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const PopularMoviesList = ({pageStyle, page=1}) => {
  const {popular, error, loading } = usePopularMovies({page});

  if (error) {
    return (
      <div className="p-4 bg-red-100 min-h-screen text-red-500 flex justify-center items-center">
        Looks like TMDB is updating their system! Please try again in a little while.
      </div>
    );
  }
  
  return (
    <div className='bg-gray-200'>
      <div className='p-4 text-2xl font-bold text-gray-800'>Popular Movies</div>
      <div className='w-full'>
        <MoviesList pageStyle={pageStyle} loading={loading} trending={popular} />
      </div>
    </div>

  )
}

export default PopularMoviesList
