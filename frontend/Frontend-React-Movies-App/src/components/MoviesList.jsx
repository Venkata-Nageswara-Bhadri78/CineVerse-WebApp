import React from 'react'
import MovieCard from './MovieCard'
import RoundProgress from '../ui/RoundProgress'
import PersonCard from './PersonCard'
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton'

const MoviesList = ({ pageStyle, loading, trending }) => {
    if(loading){
        return <ListLoadingSkeleton />
    }
    return(
        // <div className='p-3 flex scrollbar-hide  flex-row overflow-y-hidden overflow-x-auto w-full gap-3 bg-gray-300'>
        <div
            className={`${
                pageStyle
                ? 'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 justify-items-center'
                : 'flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 px-2 scrollbar-hide'
            } p-2 bg-gray-200`}
            >
            {loading ? <ListLoadingSkeleton /> : (
                trending.map(movie => {
                    return(
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })
            )}
        </div>
    )
}

export default MoviesList