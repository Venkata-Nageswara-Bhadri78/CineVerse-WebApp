import React from 'react';
import { Link } from 'react-router-dom';

import { SiThemoviedatabase } from "react-icons/si";
import { RiMovieAiFill } from "react-icons/ri";

const HeaderItems = ({ showMenu, setShowMenu }) => {
  const linkStyle =
    'px-4 py-2 bg-white text-black rounded-full gap-2 shadow-lg';

  return (
    <div
      className={`md:flex md:flex-row flex-col gap-2 md:gap-4 shadow-2xl items-center justify-between bg-blue-300 md:bg-blue-400 p-4 ${
        showMenu ? 'flex' : 'hidden md:flex'
      }`}
    >
        <Link to="/">
          <div className='hidden md:flex w-full text-xl md:text-2xl items-center gap-2 text-white'>
            <div className='bg-white shadow-lg rounded-full p-2 text-black'><SiThemoviedatabase size={35}/></div>
            <div className='flex items-center gap-2 bg-white px-4 shadow-lg py-2 text-black rounded-full'>Cine <RiMovieAiFill /> Verse</div>
          </div>
        </Link>
        <div className='flex flex-col md:flex-row w-[60%] items-center gap-2 justify-between'>
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
