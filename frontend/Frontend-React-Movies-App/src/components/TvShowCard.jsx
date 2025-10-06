import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import { Link } from 'react-router-dom'
const TvShowCard = ({show}) => {
    // console.log(show);
  return (
    <Link to={`/tv_show/${show.id}`}>
        <div className='gap-3 w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
        <div className=''>
            <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`The Movive ${show.title} Album Pic`} />
        </div>
        <div className='h-30 flex justify-between p-3 items-center'>
            <div className='overflow-hidden w-40'>
                <div className='text-lg font-semibold overflow-hidden'><strong>{show.name || show.title}</strong></div>
                <div className='text-sm text-gray-500'>{show.release_date || show.name}</div>
            </div>
            <div>
                <RoundProgress value={(show.vote_average / 10) * 100}/>
            </div>
        </div>
        </div>
    </Link>
  )
}
/*
    {
        "adult": false,
        "backdrop_path": "/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 1396,
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Breaking Bad",
        "overview": "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        "popularity": 97.835,
        "poster_path": "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        "first_air_date": "2008-01-20",
        "name": "Breaking Bad",
        "vote_average": 8.92,
        "vote_count": 16031
    }
*/
export default TvShowCard
