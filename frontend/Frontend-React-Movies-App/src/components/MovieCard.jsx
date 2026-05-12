import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie_details/${movie.id}`} className="block transform transition-transform hover:scale-[1.03] active:scale-95">
      <div className='w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white/70 backdrop-blur-md border border-white/30 shadow-lg flex flex-col rounded-xl overflow-hidden h-full'>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`The Movie ${movie.title} Poster`}
            loading="lazy"
          />
        </div>

        <div className='flex-1 flex justify-between px-3 py-2 items-center bg-white/50'>
          <div className='overflow-hidden pr-2'>
            <div className='text-xs font-bold truncate leading-tight text-gray-800'>
              {movie.title}
            </div>
            <div className='text-[10px] text-gray-500 font-medium'>{movie.release_date}</div>
          </div>
          <div className='flex-shrink-0 scale-75 origin-right'>
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
