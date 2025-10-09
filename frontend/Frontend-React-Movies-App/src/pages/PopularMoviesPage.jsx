import React, { useEffect, useRef, useState } from 'react'
import PopularMoviesList from '../components/PopularMoviesList'
import PageBar from '../API/PageBar';

const PopularMoviesPage = () => {
  const [page, setPage] = useState(1); 

  const pageStyle = true;
  const topRef = useRef(null);

  useEffect(() => {
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }, [page]);
  // const [pageBarStop, setPageBarStop] = useState(false);

  return (
    <div>
      <div ref={topRef}></div>
      <PopularMoviesList pageStyle={pageStyle} page={page}/>
      <div><PageBar setPage={setPage} page={page} /></div>
    </div>
  )
}

export default PopularMoviesPage
