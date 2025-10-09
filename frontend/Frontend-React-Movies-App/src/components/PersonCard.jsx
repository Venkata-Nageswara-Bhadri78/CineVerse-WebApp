import React from 'react'
import { Link } from 'react-router-dom'
import RoundProgress from '../ui/RoundProgress'
import DefaultPersonImage from '../ui/DefaultPersonImage'

const PersonCard = ({ person }) => {
  const popularityValue = Math.min((person.popularity / 10) * 100, 100)

  return (
    <Link
      to={`/person/${person.id}`}
      className="group block transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="w-36 sm:w-40 md:w-44 lg:w-full flex-shrink-0 bg-white shadow-md flex flex-col rounded-lg overflow-hidden">
        
        {/* Profile Image */}
        <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
          {person.profile_path ? (
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
              alt={`Profile of ${person.name}`}
              loading="lazy"
            />
          ) : (
            <DefaultPersonImage name={person.name} />
          )}
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center px-2 py-2">
          
          {/* Text Info */}
          <div className="w-24 overflow-hidden">
            <div className="text-xs sm:text-sm font-semibold truncate leading-tight text-gray-800">
              {person.name}
            </div>
            <div className="text-[10px] text-gray-500 truncate">
              {person.known_for_department || 'Actor'}
            </div>
          </div>

          {/* Popularity */}
          <div className="flex flex-col items-center scale-75 sm:scale-90">
            <div className="text-[10px] text-gray-600 leading-none mb-[2px]">
              Popularity
            </div>
            <RoundProgress value={popularityValue} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PersonCard


// import React from 'react'
// import RoundProgress from '../ui/RoundProgress'
// import { Link } from 'react-router-dom'
// import DefaultPersonImage from '../ui/DefaultPersonImage'

// const PersonCard = ({ person }) => {
//   return (
//     <Link to={`/person/${person.id}`}>
//       <div className='w-36 sm:w-40 md:w-44 lg:w-full flex-shrink-0 bg-white shadow-md flex flex-col items-center rounded-lg'>
//         <div>
//           {person.profile_path ? <img
//             className='rounded-t-lg w-full object-cover h-52'
//             src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
//             alt={`The Person ${person.name} Profile`}
//           /> 
//           : <DefaultPersonImage name={person.name} />}
//         </div>

//         <div className='h-18 flex justify-between px-2 py-1 items-center'>
//           <div className='overflow-hidden w-24'>
//             <div className='text-xs font-semibold truncate leading-tight'>
//               <strong>{person.name}</strong>
//             </div>
//             <div className='text-[9px] text-gray-500 truncate'>
//               {person.known_for_department || 'Actor'}
//             </div>
//           </div>

//           <div className='flex flex-col items-center scale-65'>
//             <div className='text-[9px] text-gray-600 leading-none mb-[2px]'>
//               Popularity
//             </div>
//             <RoundProgress value={(person.popularity / 10) * 100} />
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default PersonCard
