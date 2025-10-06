import React, { useState } from 'react'
import PopularMoviesList from '../components/PopularMoviesList'
import { usePopularMovies } from '../API/Tmdb'
import PageBar from '../API/PageBar';
import TrendingSection from '../components/TrendingSection';
import TopRatedSection from '../components/TopRatedSection';

const TopRatedMoviesPage = () => {
  const [page, setPage] = useState(1);  

  return (
    <div>
      <TopRatedSection page={page}/>
      <PageBar page={page} setPage={setPage}/>
    </div>
  )
}

export default TopRatedMoviesPage
