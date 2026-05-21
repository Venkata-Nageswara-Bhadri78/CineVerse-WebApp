import React from 'react'
import MovieCard from './MovieCard'
import PersonCard from './PersonCard'
import TvShowCard from './TvShowCard'
import ListLoadingSkeleton from '../ui/ListLoadingSkeleton'

const MoviesList = ({ pageStyle, loading, trending }) => {
    return(
        <div className={`${
                pageStyle ? 'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3'
                : 'flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 scrollbar-hide'
            } p-2 bg-gray-200`}
            >
            {loading ? <ListLoadingSkeleton pageStyle={pageStyle} /> : (
                trending.map(item => {
                    if (item.media_type === 'person') {
                        return <PersonCard key={item.id} person={item} />
                    }
                    if (item.media_type === 'tv') {
                        return <TvShowCard key={item.id} show={item} />
                    }
                    return <MovieCard key={item.id} movie={item} />
                })
            )}
        </div>
    )
}

export default MoviesList