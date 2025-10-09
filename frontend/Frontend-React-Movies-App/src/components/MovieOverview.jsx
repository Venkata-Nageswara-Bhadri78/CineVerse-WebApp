import React from 'react'

import { useMovieDetails } from '../API/Tmdb';
import CastingDetails from './CastingDetails';
import { ClassNames } from '@emotion/react';
import RoundProgress from '../ui/RoundProgress';
import default_prod_logo from '../assets/fallback-prod-logo.png';
import default_prod from '../assets/fallback-prod-logo.png'

import { FaRegPlayCircle } from "react-icons/fa";

const MovieOverview = ({type, movieId, credits}) => {
    const { movie, error, loading } = useMovieDetails({type: 'movie', movieId: movieId, credits: ""});

    return (
        <div>
            {movie.map(data => {
                return (
                    <div key={data.id}>

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 w-full max-w-6xl mx-auto">
                        
                        {/* Poster */}
                        <div className="flex-shrink-0 mx-auto flex justify-center">
                        <img 
                            className="rounded-lg shadow-lg h-94" 
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
                            alt="Movie Poster" 
                        />
                        </div>

                        {/* Text section */}
                        
                        <div className="flex flex-col justify-center text-black">
                            <div className='flex items-center gap-5 mb-4'>
                                <div className="cursor-pointer text-2xl font-bold">{data.original_title} ({data.release_date.slice(0, 4)})</div>
                                {data.homepage && <a href={data.homepage}><div className='bg-blue-500 text-white rounded-full flex items-center gap-1 px-2 py-1'><FaRegPlayCircle /> Watch Movie</div></a>}
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <div className='flex gap-3'> <div className='font-semibold'>Release Date: </div> {data.release_date}</div>
                                    <div className='flex gap-3'><div className='font-semibold'>Genre: </div> {data.genres.map(item => item.name).join(", ")}</div>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                    <div className='text-[7px]'>User's Rating</div>
                                    <RoundProgress value={(data.vote_average/10)*100}/>
                                </div>
                            </div>

                            <div className='py-3'>
                                <div className='font-semibold'>Overview: </div>
                                <p className="text-justify leading-relaxed">{data.overview}</p>
                            </div>
                            <div>
                                <div className='font-semibold'>Production Companies: </div>
                                <div className='flex flex-col gap-2 md:flex-row flex-wrap'> {/*  md:flex-row md:justify-around justify-between py-2 */}
                                    {data.production_companies.map(company => {
                                        return(
                                            <div key={company.id} className='bg-blue-100 md:gap-2 flex flex-row justify-between items-center rounded-full text-black p-2 md:shadow-2xl border border-blue-400'>
                                                <img className="h-5" src={company.logo_path ? `https://image.tmdb.org/t/p/w500${company.logo_path}` : default_prod_logo} alt="Production Logo" />
                                                <div>{company.name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                })}
        </div>
    )
}

export default MovieOverview