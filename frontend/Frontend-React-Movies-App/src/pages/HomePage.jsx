import React from 'react'
import PopularMoviesList from '../components/PopularMoviesList'
import TrendingSection from '../components/TrendingSection'
import TopRatedSection from '../components/TopRatedSection'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
        <PopularMoviesList />
        <TrendingSection />
        <TopRatedSection />
    </div>
  )
}

export default HomePage