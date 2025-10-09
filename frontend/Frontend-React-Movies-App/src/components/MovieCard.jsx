import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie_details/${movie.id}`}>
      <div className='w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white shadow-md flex flex-col rounded-lg'>
        <div>
          <img
            className='rounded-t-lg w-full object-cover h-60'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`The Movie ${movie.title} Poster`}
          />
        </div>

        <div className='h-15 flex justify-between px-2 py-1 items-center'>
          <div className='overflow-hidden w-24'>
            <div className='text-xs font-bold truncate leading-tight'>
              {movie.title}
            </div>
            <div className='text-[9px] text-gray-500'>{movie.release_date}</div>
          </div>
          <div className='scale-65'>
            <RoundProgress value={(movie.vote_average / 10) * 100} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard

// import React from 'react'
// import RoundProgress from '../ui/RoundProgress'
// import { Link } from 'react-router-dom'
// const MovieCard = ({movie}) => {
//   return (
//     <Link to={`/movie_details/${movie.id}`}>
//       <div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col rounded-lg'>
//         <div className=''>
//             <img className='rounded-t-lg w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`The Movive ${movie.title} Album Pic`} />
//         </div>
//         <div className='h-25 flex justify-between px-3 items-center'>
//             <div className='overflow-hidden w-40'>
//                 <div className='text-lg font-semibold overflow-hidden'><strong>{movie.title}</strong></div>
//                 <div className='text-sm text-gray-500'>{movie.release_date}</div>
//             </div>
//             <div>
//                 <RoundProgress value={(movie.vote_average / 10) * 100}/>
//             </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default MovieCard
