import React, { useState } from 'react'
import { MdManageSearch } from "react-icons/md";
import ChoiceSelector from '../API/ChoiceSelector';
import { useAllMoviesData } from '../API/Tmdb';
import MoviesList from './MoviesList';

const BrowseMovies = () => {

  const [searchValue, setSearchValue] = useState("");
  const [choice, setChoice] = useState("movie");

  const {movies, error, loading} = useAllMoviesData();
  // console.log(movies);
  const finalData = movies.filter(item => {
    return item.title?.toLowerCase().includes(searchValue.toLowerCase());
  });
  
  return (
    <div className='w-full gap-3 p-3 bg-gray-300 flex justify-center items-center'>
        <MdManageSearch size={35} className='text-white'/>
        <input className='p-1 w-1/2 bg-white rounded-md' onChange={(e) => {setSearchValue(e.target.value)}} type="text" placeholder='Search Category'/>
        <div><ChoiceSelector selectChoice={choice} setSelectChoice={setChoice} isTopRated={false}/></div>
        <div>
            <MoviesList trending={finalData}/>
        </div>
    </div>
  )
}

export default BrowseMovies