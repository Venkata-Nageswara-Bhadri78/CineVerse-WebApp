import React, { useState } from 'react'

import MovieCard from './MovieCard';
// https://api.themoviedb.org/3/trending/movie/{time_window}
import Tmdb, { useTrendingMovies } from '../API/Tmdb'
import Switcher from '../API/Switcher';
import ChoiceSelector from '../API/ChoiceSelector';
import PersonList from './PersonList';
import TvShowCard from './TvShowCard';

const TvShowListing = ({ trending }) => {
    // console.log(trending);
    return (
        <div className='p-3 overflow-y-hidden flex flex-row overflow-x-auto w-full gap-3 bg-gray-300'>
            {trending.map(show => {
                return(
                    <TvShowCard key={show.id} show={show} />
                )
            })}
        </div>
    )
}

export default TvShowListing;