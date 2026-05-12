import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const TvShowCard = ({ show }) => {
  return (
    <Link to={`/tv_show/${show.id}`} className="block transform transition-transform hover:scale-[1.03] active:scale-95">
      <div className='w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white/70 backdrop-blur-md border border-white/30 shadow-lg flex flex-col rounded-xl overflow-hidden h-full'>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                : '/default-cast.png'
            }
            alt={`The TV Show ${show.name || show.title} Poster`}
            loading="lazy"
          />
        </div>

        <div className='flex-1 flex justify-between px-3 py-2 items-center bg-white/50'>
          <div className='overflow-hidden pr-2'>
            <div className='text-xs font-bold truncate leading-tight text-gray-800'>
              {show.name || show.title}
            </div>
            <div className='text-[10px] text-gray-500 font-medium'>
              {show.first_air_date || show.release_date || ''}
            </div>
          </div>

          <div className='flex-shrink-0 scale-75 origin-right'>
            <RoundProgress value={(show.vote_average / 10) * 100} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TvShowCard
