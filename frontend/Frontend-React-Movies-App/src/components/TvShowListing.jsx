import React, { useState } from 'react'

import MovieCard from './MovieCard';
// https://api.themoviedb.org/3/trending/movie/{time_window}
import Tmdb, { useTrendingMovies } from '../API/Tmdb'
import Switcher from '../API/Switcher';
import ChoiceSelector from '../API/ChoiceSelector';
import PersonList from './PersonList';
import TvShowCard from './TvShowCard';
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton';

const TvShowListing = ({ pageStyle, loading, trending }) => {
    // console.log(trending);
    return (
        // <div className='p-3 overflow-y-hidden flex flex-row overflow-x-auto w-full gap-3 bg-gray-300'>
        <div
        className={`${
          pageStyle
            ? 'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 justify-items-center'
            : 'flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 px-2 scrollbar-hide'} p-2 bg-gray-200`}>

            {loading ? <ListLoadingSkeleton /> : (trending.map(show => {
                return(
                    <TvShowCard key={show.id} show={show} />
                )
            }))}
        </div>
    )
}

export default TvShowListing;