import React, { useState } from 'react'
import PopularMoviesList from '../components/PopularMoviesList'
import { usePopularMovies } from '../API/Tmdb'
import PageBar from '../API/PageBar';
import TrendingSection from '../components/TrendingSection';

const TrendingMoviesPage = () => {
  const [page, setPage] = useState(1);  
  const pageStyle = true;
  return (
    <div>
      <TrendingSection pageStyle={pageStyle} page={page}/>
      <PageBar page={page} setPage={setPage}/>
    </div>
  )
}

export default TrendingMoviesPage
