import React, { useState } from 'react'
import PopularMoviesList from '../components/PopularMoviesList'
import { usePopularMovies } from '../API/Tmdb'
import PageBar from '../API/PageBar';

const PopularMoviesPage = () => {
  const [page, setPage] = useState(1); 
  const pageStyle = 'grid grid-row-3'; 
  return (
    <div>
      <PopularMoviesList pageStyle={pageStyle} page={page}/>
      <div><PageBar page={page} setPage={setPage}/></div>

    </div>
  )
}

export default PopularMoviesPage