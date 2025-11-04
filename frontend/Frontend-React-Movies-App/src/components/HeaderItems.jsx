import React from 'react';
import { Link } from 'react-router-dom';

import { SiThemoviedatabase } from "react-icons/si";
import { RiMovieAiFill } from "react-icons/ri";

const HeaderItems = ({ showMenu }) => {
  const linkStyle = 'px-4 py-2 bg-white text-black rounded-full gap-2 shadow-lg';
  return (
    <div className={`w-[60%] md:w-[80%] p-4 bg-slate-400 z-50 left-2 md:left-0 md:right-0 shadow-md top-20 md:top-5 rounded-lg mx-auto md:flex md:flex-row flex-col gap-2 md:gap-4 items-center justify-between 
    ${showMenu ? 'flex absolute' : 'fixed hidden md:flex'}`}>

        <Link to="/">
          <div className='hidden md:flex w-full items-center gap-2 text-white'>
            <div className={linkStyle}><SiThemoviedatabase size={25}/></div>
            <div className={`${linkStyle} flex items-center`}><RiMovieAiFill /> Cine Verse</div>
          </div>
        </Link>

        <div className='flex flex-col md:flex-row items-center gap-2 justify-between'>
          <Link to="/"><div className={linkStyle}>Home</div></Link>
          <Link to="/browse_movies"><div className={linkStyle}>Browse Movies</div></Link>
          <Link to="/popular_movies"><div className={linkStyle}>Popular Movies</div></Link>
          <Link to="/top_rated_movies"><div className={linkStyle}>Top Rated</div></Link>
          <Link to="/trending_movies"><div className={linkStyle}>Trending Movies</div></Link>
        </div>
    </div>
  );
};

export default HeaderItems;
