import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import PopularMoviesList from './components/PopularMoviesList'
import TrendingList from './components/MoviesList'
import Switcher from './API/Switcher';
import TrendingSection from './components/TrendingSection'
import TopRatedSection from './components/TopRatedSection'
import MovieDetails from './components/MovieDetails'
import CastingDetails from './components/CastingDetails';
import MovieOverview from './components/MovieOverview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import DayWeekSwitcher from './API/DayWeekSwitcher'
import CategorySwitcher from './API/CategorySwitcher';
import { selectClasses } from '@mui/material'
import BrowseMovies from './components/BrowseMovies'
import PopularMoviesPage from './pages/PopularMoviesPage';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import TrendingMoviesPage from './pages/TrendingMoviesPage'
import PageBar from './API/PageBar'
import BackButton from './components/BackButton'
import PersonDetails from './components/PersonDetails';
import ShowDetails from './components/ShowDetails'
import Floating from './components/Floating'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/top_rated_movies' element={<TopRatedMoviesPage />} />
        <Route path='/popular_movies' element={<PopularMoviesPage />} />
        <Route path='/browse_movies' element={<BrowseMovies />} />
        <Route path='movie_details/:movie_id' element={<MovieDetails />} />
        <Route path='/tv_show/:show_id' element={<ShowDetails />} />
        <Route path='/person/:person_id' element={<PersonDetails />} />
        <Route path='/trending_movies' element={<TrendingMoviesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
