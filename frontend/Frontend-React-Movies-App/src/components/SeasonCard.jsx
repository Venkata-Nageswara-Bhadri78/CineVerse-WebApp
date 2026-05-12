import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const SeasonCard = ({ season, showId }) => {
  return (
    <Link to={`/tv_show/${showId}/season/${season.season_number}`} className="block transform transition-transform hover:scale-[1.03] active:scale-95 h-full">
      <div className='w-full flex-shrink-0 bg-white/70 backdrop-blur-md border border-white/30 shadow-lg flex flex-col rounded-xl overflow-hidden h-full'>

        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            src={
              season.poster_path
                ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
                : '/default-cast.png'
            }
            alt={`The Season ${season.name} Poster`}
            loading="lazy"
          />
        </div>

        <div className='flex-1 flex justify-between px-3 py-2 items-center bg-white/50'>
          <div className='overflow-hidden pr-2'>
            <div className='text-[10px] md:text-xs font-bold truncate leading-tight text-gray-800'>
              {season.name}
            </div>
            <div className='text-[8px] md:text-[10px] text-gray-500 font-medium truncate'>
              {season.air_date || 'TBA'}
            </div>
            <div className='text-[8px] md:text-[10px] text-indigo-600 font-bold mt-0.5'>
              {season.episode_count} Episodes
            </div>
          </div>

          <div className='flex-shrink-0 scale-75 origin-right'>
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
