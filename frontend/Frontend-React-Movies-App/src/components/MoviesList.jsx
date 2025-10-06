import React from 'react'
import MovieCard from './MovieCard'
import RoundProgress from '../ui/RoundProgress'
import PersonCard from './PersonCard'

const MoviesList = ({ trending }) => {
    return(
        <div className='p-3 flex flex-row overflow-y-hidden overflow-x-auto w-full gap-3 bg-gray-300'>
            {trending.map(movie => {
                return(
                    <MovieCard key={movie.id} movie={movie} />
                )
            })}
        </div>
    )
}

export default MoviesList