import React, { useState } from 'react'

import MovieCard from './MovieCard';
// https://api.themoviedb.org/3/trending/movie/{time_window}
import Tmdb, { useTopRatedMovies } from '../API/Tmdb'
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
        <div className=''> 
            <div className='items-center p-2 bg-gray-300 flex flex-row justify-between'>
                <div className='p-2 text-xl'>Top Rated</div>
                <ChoiceSelector selectChoice={choice} setSelectChoice={setChoice} isTopRated={true} />
            </div>
            <div className='flex flex-row justify-between bg-gray-300'>
                {choice === "movie" ? (
                    <MoviesList pageStyle={pageStyle} loading={loading} trending={topRated} />
                ) : choice === "person" ? (
                    <PersonList pageStyle={pageStyle} trending={topRated} />
                ) : choice === "tv" ? <TvShowListing pageStyle={pageStyle} trending={topRated}/> : null}
            </div>
        </div>
    )
}

export default TopRatedSection
