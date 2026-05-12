import React, { useState, useEffect } from 'react';
import { useNowPlayingMovies } from '../API/Tmdb';
import ListLoadingSkeleton, { HeroSkeleton } from '../ui/ListLoadingSkeleton';
import MoviesList from './MoviesList';
import { Link } from 'react-router-dom';

const NowPlayingSection = ({ pageStyle, page = 1 }) => {
  const { nowPlaying, error, loading } = useNowPlayingMovies({ page });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic (every 4 sec) for the hero carousel mode
  useEffect(() => {
    if (pageStyle || !nowPlaying || nowPlaying.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nowPlaying.length);
    }, 4000); // Increased time to 4 seconds
    
    return () => clearInterval(interval);
  }, [nowPlaying, pageStyle]);

  if (error) {
    return (
      <div className="p-4 bg-red-100 min-h-screen text-red-500 flex justify-center items-center">
        Looks like TMDB is updating their system! Please try again in a little while.
      </div>
    );
  }

  if (loading) {
    return pageStyle ? (
      <div className="bg-gray-200 p-4">
        <ListLoadingSkeleton pageStyle={true} />
      </div>
    ) : (
      <HeroSkeleton />
    );
  }

  // Grid style for dedicated Now Playing page
  if (pageStyle) {
    return (
      <div className='bg-gray-200'>
        <div className='p-4 text-2xl font-bold text-gray-800 pt-4 md:pt-8'>Now Playing</div>
        <div className='w-full'>
          <MoviesList pageStyle={pageStyle} loading={loading} trending={nowPlaying} />
        </div>
      </div>
    );
  }


  // Hero Carousel style for HomePage
  if (!nowPlaying || nowPlaying.length === 0) return null;

  const currentMovie = nowPlaying[currentIndex];
  const backdropUrl = currentMovie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`;

  return (
    <div className='relative w-full aspect-video md:aspect-auto md:h-[70vh] overflow-hidden bg-gray-200 md:mt-0'>
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out'
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        {/* Very subtle Gradient Overlay to ensure text readability without hiding the poster */}
        <div className='absolute inset-0 bg-gradient-to-t from-gray-200/60 via-transparent to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-200/60 via-transparent to-transparent w-full md:w-1/2'></div>

      </div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-2/3 lg:w-1/2'>
        <h1 className='text-gray-900 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-4 drop-shadow-sm transition-all duration-500'>
          {currentMovie.title}
        </h1>
        <p className='text-gray-800 text-xs sm:text-sm md:text-lg mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 drop-shadow-sm transition-all duration-500 font-medium'>
          {currentMovie.overview}
        </p>
        <Link to={`/movie_details/${currentMovie.id}`}>
          <button className='bg-black/10 hover:bg-black/20 text-black border border-black/30 backdrop-blur-md px-4 py-1.5 md:px-2 md:py-1.5 text-xs md:text-base rounded-full font-semibold transition-all shadow-sm'>
            View Details
          </button>
        </Link>
      </div>

      {/* Progress/Indicators (Clickable dots) */}
      <div className='absolute bottom-2 right-2 md:bottom-8 md:right-8 flex gap-1.5 md:gap-2 z-10'>
        {nowPlaying.map((_, idx) => (
          <div 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 md:h-2 rounded-full cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'w-4 md:w-8 bg-black' : 'w-1.5 md:w-2 bg-black/30 hover:bg-black/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingSection;
