import React, { useEffect, useState } from 'react'

import { useMovieDetails } from '../API/Tmdb';
import CastingDetails from './CastingDetails';
import { ClassNames } from '@emotion/react';
import RoundProgress from '../ui/RoundProgress';
import MovieOverview from './MovieOverview';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
const MovieDetails = () => {
    const {movie_id} = useParams();
    
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-6 pt-6">
                <BackButton />
            </div>
            <MovieOverview type={'movie'} movieId={movie_id} credits={""}/>
            <CastingDetails type={'movie'} movieId={movie_id} />
        </div>
    )

}


export default MovieDetails