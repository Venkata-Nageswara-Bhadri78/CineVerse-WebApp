import React from 'react'
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import { usePersonDetails } from '../API/Tmdb';

const PersonDetails = () => {

    const {person_id} = useParams();
    const {person, loading, error } = usePersonDetails({type:'person', personId:person_id});
    return (
        <div>
            <div><BackButton /></div>
            <div>
                {person.map(details => {
                    return (
                        <div className="w-full p-4 bg-white shadow-md rounded-lg">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Profile Image */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${details.profile_path}`}
                                    alt={details.name}
                                    className="w-48 h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>

                            {/* Person Info */}
                            <div className="flex flex-col justify-start text-gray-800 space-y-3">
                            <div className="text-2xl font-bold">{details.name}</div>
                            {details.also_known_as?.length > 0 && (
                                <div className="text-sm text-gray-600">
                                <span className="font-semibold">Alias: </span>
                                {details.also_known_as.join(", ")}
                                </div>
                            )}
                            {details.biography && (
                                <div className="text-sm text-justify leading-relaxed text-gray-700">
                                {details.biography}
                                </div>
                            )}
                            <div className="text-sm">
                                <span className="font-semibold">DOB: </span>
                                {details.birthday || "N/A"}
                            </div>
                            {details.deathday && (
                                <div className="text-sm">
                                <span className="font-semibold">DOD: </span>
                                {details.deathday}
                                </div>
                            )}
                            <div className="text-sm">
                                <span className="font-semibold">Place of Birth: </span>
                                {details.place_of_birth || "N/A"}
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PersonDetails
/*
{

  "biography": "Austin White is an American professional wrestler and bodybuilder. He is currently signed to World Wrestling Entertainment (WWE), where he performs on the NXT brand under the ring name Austin Theory. Prior to WWE, he wrestled on the independent circuit, including several promotions under the World Wrestling Network umbrella, such as Full Impact Pro (FIP) and Evolve – along the way winning the WWN Championship, FIP World Heavyweight Championship and the Evolve Championship.",
  "birthday": "1997-08-02",
  "deathday": null,
  "gender": 2,
  "homepage": null,
  "id": 2049314,
  "imdb_id": "nm9629660",
  "known_for_department": "Acting",
  "place_of_birth": "Atlanta, Georgia, USA",
  "popularity": 0.1535,
  "profile_path": "/pFlzeBVo7yhKrZtuPFuTie8XKlF.jpg"
}
*/