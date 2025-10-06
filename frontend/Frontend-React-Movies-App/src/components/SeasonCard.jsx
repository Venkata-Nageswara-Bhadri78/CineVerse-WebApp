import React from 'react'
import RoundProgress from '../ui/RoundProgress'
const SeasonCard = ({season}) => {
    // console.log(season);

    return (
        <div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
            <div className=''>
                <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={`The Movive ${season.title} Album Pic`} />
            </div>
            <div className='flex-col flex justify-between py-3 items-center'>
                <div className='overflow-hidden flex items-center justify-around w-full'>
                    <div className='text-lg font-semibold overflow-hidden'><strong>{season.name}</strong></div>
                    <div className='text-sm text-gray-500'>{season.air_date}</div>
                </div>
                <div className='flex flex-row w-full justify-around'>
                    <div>
                        <div className='flex gap-3'><div className='font-semibold'>Season Number:</div> {season.season_number}</div>
                        <div className='flex gap-3 text-sm'><div className='font-semibold'>Number of Episodes</div>{season.episode_count}</div>            
                    </div>
                    <div>
                        <RoundProgress value={(season.vote_average / 10) * 100}/>
                    </div>
                </div>
            </div>
            {/* {season.overview ? <div className='flex gap-3 text-justify'>{season.overview}</div> : ''} */}
        </div>
    )
}

export default SeasonCard

/*

        <div className='h-auto p-3'>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} />
            </div>
            <div>
                <div className='flex gap-3 text-sm'><div className='font-semibold'>Release Date:</div>{season.air_date}</div>
                <div className='flex gap-3'><div className='font-semibold'>Season Number:</div> {season.season_number + 1}</div>
                <div className='flex gap-3'><div className='font-semibold'>Vote Average:</div> {season.vote_average}</div>
                <div className='flex gap-3 text-sm'><div className='font-semibold'>Number of Episodes</div>{season.episode_count}</div>            
                {season.overview ? <div className='flex gap-3 text-justify'>{season.overview}</div> : ''}
            </div>
        </div>
*/