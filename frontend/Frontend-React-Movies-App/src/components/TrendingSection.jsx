import React, { useState } from 'react'

import MovieCard from './MovieCard';
import Tmdb, { useTrendingMovies } from '../API/Tmdb'
import Switcher from '../API/Switcher';
import ChoiceSelector from '../API/ChoiceSelector';
import PersonList from './PersonList';
import MoviesList from './MoviesList';
import TvShowListing from './TvShowListing';
import DayWeekSwitcher from '../API/DayWeekSwitcher';

const TrendingSection = ({page=1}) => {

    const [time, setTime] = useState("day");
    const [choice, setChoice] = useState("movie"); 

    const {trending, loading, error } = useTrendingMovies({ time: time, type: choice, page: page });

    return (
        <div> 
            <div className='w-full p-4 bg-gray-300 flex flex-col justify-between'>
                <div>
                    <div className='p-2 text-2xl'>Trending</div>
                </div>
                <div className='flex felx-row justify-between items-center'>
                    <DayWeekSwitcher selected={time} setSelected={setTime} />
                    <ChoiceSelector selectChoice={choice} setSelectChoice={setChoice} isTopRated={false}/>
                </div>
            </div>   
            <div className='flex flex-row overflow-x-auto w-full bg-gray-300'>
                {choice === "movie" ? (
                    <MoviesList trending={trending} />
                ) : choice === "person" ? (
                    <PersonList trending={trending} />
                ) : choice === "tv" ? <TvShowListing trending={trending}/> : null}
            </div>
        </div>
    )
}

export default TrendingSection