import React from 'react';
import { Link } from 'react-router-dom';

import { SiThemoviedatabase } from "react-icons/si";

const HeaderItems = ({ showMenu, setShowMenu }) => {
  const linkStyle =
    'px-4 py-2 bg-white text-black rounded-full gap-2 shadow-lg';

  return (
    <div
      className={`md:flex md:flex-row flex-col gap-2 md:gap-4 shadow-2xl items-center justify-between bg-black md:bg-blue-400 p-4 ${
        showMenu ? 'flex' : 'hidden md:flex'
      }`}
    >
        <div className='text-md md:text-2xl w-[40%] flex items-center gap-2 text-white'><SiThemoviedatabase />Multi-Verse</div>
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
