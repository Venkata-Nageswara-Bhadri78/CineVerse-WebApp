import React from 'react'
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import { usePersonDetails } from '../API/Tmdb';
import { DetailsSkeleton } from '../ui/ListLoadingSkeleton';


const PersonDetails = () => {
    const { person_id } = useParams();
    const { person, loading, error } = usePersonDetails({ type: 'person', personId: person_id });

    if (loading) return (
        <div className="p-6 max-w-6xl mx-auto">
            <DetailsSkeleton />
        </div>
    );
    if (error || !person || person.length === 0) return null;

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <div className="max-w-6xl mx-auto px-4 pt-4">
                <BackButton />
            </div>
            
            <div className="px-4 mt-4">
                {person.map(details => (
                    <div key={details.id} className="w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
                            {/* Profile Image */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="relative group">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${details.profile_path}`}
                                        alt={details.name}
                                        className="w-56 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Person Info */}
                            <div className="flex flex-col justify-start text-gray-800 space-y-6 flex-1">
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2">{details.name}</h1>
                                    <div className="h-1.5 w-20 bg-indigo-500 rounded-full"></div>
                                </div>

                                {details.also_known_as?.length > 0 && (
                                    <div className="text-sm">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Also Known As</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {details.also_known_as.slice(0, 5).map((alias, i) => (
                                                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">
                                                    {alias}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {details.biography && (
                                    <div className="space-y-2">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Biography</span>
                                        <p className="text-sm md:text-base text-justify leading-relaxed text-gray-600 max-w-3xl">
                                            {details.biography}
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Date of Birth</span>
                                        <p className="font-bold text-gray-700">{details.birthday || "N/A"}</p>
                                    </div>
                                    
                                    {details.deathday && (
                                        <div className="space-y-1">
                                            <span className="font-bold text-red-400 uppercase tracking-widest text-[10px]">Date of Death</span>
                                            <p className="font-bold text-red-600">{details.deathday}</p>
                                        </div>
                                    )}

                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Place of Birth</span>
                                        <p className="font-bold text-gray-700">{details.place_of_birth || "N/A"}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Known For</span>
                                        <p className="font-bold text-gray-700">{details.known_for_department || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


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