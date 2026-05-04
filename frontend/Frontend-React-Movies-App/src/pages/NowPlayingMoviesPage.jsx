import React, { useEffect, useRef, useState } from 'react'
import NowPlayingSection from '../components/NowPlayingSection'
import PageBar from '../API/PageBar';

const NowPlayingMoviesPage = () => {
  const [page, setPage] = useState(1); 

  const pageStyle = true;
  const topRef = useRef(null);

  useEffect(() => {
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }, [page]);

  return (
    <div>
      <div ref={topRef}></div>
      <NowPlayingSection pageStyle={pageStyle} page={page}/>
      <div><PageBar setPage={setPage} page={page} /></div>
    </div>
  )
}

export default NowPlayingMoviesPage
