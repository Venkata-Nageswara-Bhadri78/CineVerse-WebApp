import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const TvShowCard = ({ show }) => {
  return (
    <Link to={`/tv_show/${show.id}`}>
      <div className='w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white shadow-md flex flex-col rounded-lg'>
        <div>
          <img
            className='rounded-t-lg w-full object-cover h-52'
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                : '/default-cast.png' // optional fallback
            }
            alt={`The TV Show ${show.name || show.title} Poster`}
          />
        </div>

        <div className='h-18 flex justify-between px-2 py-1 items-center'>
          <div className='overflow-hidden w-24'>
            <div className='text-xs font-semibold truncate leading-tight'>
              <strong>{show.name || show.title}</strong>
            </div>
            <div className='text-[9px] text-gray-500 truncate'>
              {show.first_air_date || show.release_date || ''}
            </div>
          </div>

          <div className='scale-65'>
            <RoundProgress value={(show.vote_average / 10) * 100} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TvShowCard
