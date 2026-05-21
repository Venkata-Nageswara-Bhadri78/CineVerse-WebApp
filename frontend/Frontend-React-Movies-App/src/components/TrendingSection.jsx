import React, { useState } from 'react'

import MovieCard from './MovieCard';
import { useTrendingMovies } from '../API/Tmdb'
import Switcher from '../API/Switcher';
import ChoiceSelector from '../API/ChoiceSelector';
import PersonList from './PersonList';
import MoviesList from './MoviesList';
import TvShowListing from './TvShowListing';
import DayWeekSwitcher from '../API/DayWeekSwitcher';
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton';

const TrendingSection = ({pageStyle, page=1}) => {

    const [time, setTime] = useState("day");
    const [choice, setChoice] = useState("movie"); 

    const {trending, loading, error } = useTrendingMovies({ time: time, type: choice, page: page });
    return (
        <div className='bg-gray-50/50 backdrop-blur-sm border-b border-gray-200'> 
            <div className='p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto'>
                <div className='text-2xl md:text-3xl font-extrabold text-gray-900 border-l-4 border-indigo-500 pl-4'>Trending</div>
                <div className='flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto'>
                    <DayWeekSwitcher selected={time} setSelected={setTime} />
                    <ChoiceSelector selectChoice={choice} setSelectChoice={setChoice} isTopRated={false}/>
                </div>
            </div> 
            <div className='w-full'>
                {choice === "movie" ? (
                    <MoviesList pageStyle={pageStyle} loading={loading} trending={trending} />
                ) : choice === "person" ? (
                    <PersonList pageStyle={pageStyle} loading={loading} trending={trending} />
                ) : choice === "tv" ? <TvShowListing pageStyle={pageStyle} loading={loading} trending={trending}/> : null}
            </div>
        </div>

    )

}

export default TrendingSection