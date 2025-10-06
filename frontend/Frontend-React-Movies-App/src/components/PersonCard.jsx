import React from 'react'

import RoundProgress from '../ui/RoundProgress';
import { Link } from 'react-router-dom';
const PersonCard = ({key, person}) => {
    return (
        <Link to={`/person/${person.id}`}>
            <div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
                <div className=''>
                    <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={`The Movive ${person.name} Album Pic`} />
                </div>
                <div className='h-30 flex justify-between p-3 items-center'>
                    <div className='overflow-hidden w-40'>
                        <div className='text-lg font-semibold overflow-hidden'><strong>{person.original_name}</strong></div>
                        <div className='text-sm text-gray-500'>{person.name}</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[10px]'>Popularity</div>
                        <RoundProgress value={(person.popularity / 10) * 100}/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PersonCard