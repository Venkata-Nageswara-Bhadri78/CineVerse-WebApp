import React, { useState } from 'react'

import MovieCard from './MovieCard';
// https://api.themoviedb.org/3/trending/movie/{time_window}
import { useTopRatedMovies } from '../API/Tmdb'
import Switcher from '../API/Switcher';
import ChoiceSelector from '../API/ChoiceSelector';
import PersonList from './PersonList';
import MoviesList from './MoviesList';
import TvShowListing from './TvShowListing';
import DayWeekSwitcher from '../API/DayWeekSwitcher';
import CategorySwitcher from '../API/CategorySwitcher';

const TopRatedSection = ({pageStyle, page=1}) => {

    const [choice, setChoice] = useState("movie"); 
    const [time, setTime] = useState("day"); 

    const {topRated, loading, error } = useTopRatedMovies({type: choice, category: "top_rated", page: page});

    return (
        <div className='bg-gray-50/50 backdrop-blur-sm border-b border-gray-200'> 
            <div className='p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto'>
                <div className='text-2xl md:text-3xl font-extrabold text-gray-900 border-l-4 border-indigo-500 pl-4'>Top Rated</div>
                <div className='w-full md:w-auto flex justify-center'>
                    <ChoiceSelector selectChoice={choice} setSelectChoice={setChoice} isTopRated={true} />
                </div>
            </div> 
            <div className='w-full'>
                {choice === "movie" ? (
                    <MoviesList pageStyle={pageStyle} loading={loading} trending={topRated} />
                ) : choice === "person" ? (
                    <PersonList pageStyle={pageStyle} loading={loading} trending={topRated} />
                ) : choice === "tv" ? <TvShowListing pageStyle={pageStyle} loading={loading} trending={topRated}/> : null}
            </div>
        </div>

    )

}

export default TopRatedSection
