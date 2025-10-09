import React, { useState } from 'react'
import { usePersonDetails } from '../API/Tmdb';
import SeasonCard from './SeasonCard';
import BackButton from './BackButton';
import FloatingSeasonsInfo from './FloatingSeasonsInfo';
import { useParams } from 'react-router-dom';
const ShowDetails = () => {
    const {show_id} = useParams();

    const {person, loading, error } = usePersonDetails({type:'tv', personId:show_id});

    const [showSeasons, setShowSeasons] = useState(false);

    // console.log(showSeasons);
    return (
        <div>
            <div><BackButton /></div>
            <div className="p-6 max-w-6xl mx-auto bg-gray-100 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Poster */}
                    <div className="md:w-1/3 flex justify-center">
                    <img
                        className="rounded-lg shadow-md max-h-[500px] object-cover"
                        src={`https://image.tmdb.org/t/p/w500${person.poster_path}`}
                        alt={person.name}
                    />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-4">
                    {/* Title */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className="text-center md:text-left">
                            
                            <div className="text-3xl font-bold hover:text-blue-600 transition-colors">
                                {person.name}
                            </div>
                            <p className="text-gray-500 italic">{person.tagline}</p>
                        </div>
                        {person.homepage && 
                            <a href={person.homepage} target="_blank" rel="noreferrer">
                                <div className='bg-blue-100 border border-blue-400 p-2 rounded-full'>View Official Page</div>
                            </a>
                        }
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-2 text-sm">
                        <div className="flex gap-2">
                        <span className="font-semibold">Genre:</span>
                        <span>
                            {Array.isArray(person.genres) && person.genres.length > 0
                            ? person.genres.map((item) => item.name).join(", ")
                            : "N/A"}
                        </span>
                        </div>

                        <div className="flex gap-2">
                        <span className="font-semibold">Released on:</span>
                        <span>{person.first_air_date || "Unknown"}</span>
                        </div>

                        <div className="flex gap-2">
                        <span className="font-semibold">Total Seasons:</span>
                        <span>{person.number_of_seasons}</span>
                        </div>

                        <div className="flex gap-2">
                        <span className="font-semibold">Total Episodes:</span>
                        <span>{person.number_of_episodes}</span>
                        </div>
                    </div>

                    {/* Overview */}
                    <p className="text-justify text-gray-700 leading-relaxed">
                        {person.overview}
                    </p>

                    {/* Production Companies */}
                    <div>
                        <h2 className="font-semibold mb-2">Production Companies:</h2>
                        <div className="flex flex-wrap gap-4">
                        {Array.isArray(person.production_companies) &&
                        person.production_companies.length > 0 ? (
                            person.production_companies.map((company) => (
                            <div
                                key={company.id}
                                className="flex items-center gap-2 bg-white rounded-lg shadow-md px-3 py-2 hover:shadow-xl transition"
                            >
                                {company.logo_path && (
                                <img
                                    className="h-6 object-contain"
                                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                    alt={company.name}
                                />
                                )}
                                <span className="text-sm">{company.name}</span>
                            </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No companies listed</p>
                        )}
                        </div>
                    </div>

                    {/* Seasons Button */}
                    <div className="flex justify-center md:justify-start">
                        <button
                        onClick={() => setShowSeasons(!showSeasons)}
                        className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-800 transition"
                        >
                        SEASONS
                        </button>
                    </div>
                    </div>
                </div>
                <div className='flex overflow-x-scroll scrollbar-hide gap-4 p-3'>
                    {showSeasons ? Array.isArray(person.seasons) && person.seasons.length > 0 ? person.seasons.map(season => {
                        return(
                            <div key={season.id} className=''>
                                <SeasonCard season={season}/>
                            </div>
                        )
                    }) : '' : ''}
                </div>

                {/* {showSeasons ? <FloatingSeasonsInfo data={person.seasons} /> : ''} */}
            </div>
        </div>

    )
}

export default ShowDetails


