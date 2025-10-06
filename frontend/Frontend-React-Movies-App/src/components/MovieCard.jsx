import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie_details/${movie.id}`}>
      <div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
        <div className=''>
            <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`The Movive ${movie.title} Album Pic`} />
        </div>
        <div className='h-30 flex justify-between p-3 items-center'>
            <div className='overflow-hidden w-40'>
                <div className='text-lg font-semibold overflow-hidden'><strong>{movie.title}</strong></div>
                <div className='text-sm text-gray-500'>{movie.release_date}</div>
            </div>
            <div>
                <RoundProgress value={(movie.vote_average / 10) * 100}/>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
