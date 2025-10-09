import React from 'react';
import {usePopularMovies} from '../API/Tmdb';
import RoundProgress from '../ui/RoundProgress';
import MovieCard from './MovieCard';
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton';

const extrasInURL = '&language=en-US';
const baseLink = import.meta.env.VITE_BASELINK;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const PopularMoviesList = ({pageStyle, page=1}) => {
  const {popular, error, loading } = usePopularMovies({page});
  // if(popular.length==0){
  //   setPageBarStop(true);
  // }
  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-600">
        Failed to load popular movies. Please try again after some time.
      </div>
    );
  }
  
  return (
    <div>
      <div className='p-2 bg-gray-300 text-xl'>Popular Movies</div>
      
      <div
  className={`${
    pageStyle
      ? 'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 justify-items-center'
      : 'flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 px-2 scrollbar-hide'} py-2 bg-gray-200`}>
      {/* <div className="flex flex-row overflow-x-auto scrollbar-hide px-4 gap-3 bg-gray-300"> */}

        {loading ? <ListLoadingSkeleton /> : (
          popular.map((movie, index) => {
              return(
                <div key={index} className='snap-start'>
                  <MovieCard key={movie.id} movie={movie} />
                </div>
              )
          }))
        }
      </div>
    </div>
  )
}

export default PopularMoviesList
