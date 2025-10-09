import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const SeasonCard = ({ season, showId }) => {
  return (
    <Link to={`/tv_show/${showId}/season/${season.season_number}`}>
      <div className='w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white shadow-md flex flex-col rounded-lg'>
        <div>
          <img
            className='rounded-t-lg w-full object-cover h-60'
            src={
              season.poster_path
                ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
                : '/default-cast.png' // optional fallback
            }
            alt={`The Season ${season.name} Poster`}
          />
        </div>

        <div className='h-18 flex justify-between px-2 py-1 items-center'>
          <div className='overflow-hidden w-24'>
            <div className='text-xs font-semibold truncate leading-tight'>
              <strong>{season.name}</strong>
            </div>
            <div className='text-[9px] text-gray-500 truncate'>
              {season.air_date || ''}
            </div>
          </div>

          <div className='scale-65'>
            <RoundProgress value={(season.vote_average / 10) * 100} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SeasonCard


// import React from 'react'
// import RoundProgress from '../ui/RoundProgress'
// const SeasonCard = ({season}) => {
//     // console.log(season);

//     return (
//         <div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
//             <div className=''>
//                 <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={`The Movive ${season.title} Album Pic`} />
//             </div>
//             <div className='flex-col flex justify-between py-3 items-center'>
//                 <div className='overflow-hidden flex items-center justify-around w-full'>
//                     <div className='text-lg font-semibold overflow-hidden'><strong>{season.name}</strong></div>
//                     <div className='text-sm text-gray-500'>{season.air_date}</div>
//                 </div>
//                 <div className='flex flex-row w-full justify-around'>
//                     <div>
//                         <div className='flex gap-3'><div className='font-semibold'>Season Number:</div> {season.season_number}</div>
//                         <div className='flex gap-3 text-sm'><div className='font-semibold'>Number of Episodes</div>{season.episode_count}</div>            
//                     </div>
//                     <div>
//                         <RoundProgress value={(season.vote_average / 10) * 100}/>
//                     </div>
//                 </div>
//             </div>
//             {/* {season.overview ? <div className='flex gap-3 text-justify'>{season.overview}</div> : ''} */}
//         </div>
//     )
// }

// export default SeasonCard
