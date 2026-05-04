import React from 'react';
import { useNowPlayingMovies } from '../API/Tmdb';
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton';
import MoviesList from './MoviesList';

const NowPlayingSection = ({ pageStyle, page = 1 }) => {
  const { nowPlaying, error, loading } = useNowPlayingMovies({ page });

  if (error) {
    return (
      <div className="p-4 bg-red-100 min-h-screen text-red-500 flex justify-center items-center">
        Looks like TMDB is updating their system! Please try again in a little while.
      </div>
    );
  }
  
  return (
    <div className='bg-gray-200'>
      <div className='p-2 text-xl font-bold ml-2 pt-4 md:pt-8'>Now Playing</div>
      <div>
        {loading ? <ListLoadingSkeleton /> : (
          <MoviesList pageStyle={pageStyle} loading={loading} trending={nowPlaying} />
        )}
      </div>
    </div>
  )
}

export default NowPlayingSection;
