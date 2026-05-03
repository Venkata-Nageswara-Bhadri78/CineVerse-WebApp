import React from 'react';
import { Link } from 'react-router-dom';

import { SiThemoviedatabase } from "react-icons/si";
import { RiMovieAiFill } from "react-icons/ri";

const HeaderItems = ({ showMenu, setShowMenu, isMobile }) => {
  const handleItemClick = () => {
      if (isMobile && setShowMenu) {
          setShowMenu(false);
      }
  };

  if (isMobile) {
      const mobileLinkStyle = 'block w-full px-4 py-2 mb-2 text-black bg-white/60 hover:bg-white/80 border border-white/40 rounded-lg shadow-sm transition-all font-medium text-base backdrop-blur-md';
      return (
          <div className='flex flex-col mt-6'>
            <Link to="/" onClick={handleItemClick}><div className={mobileLinkStyle}>Home</div></Link>
            <Link to="/browse_movies" onClick={handleItemClick}><div className={mobileLinkStyle}>Browse Movies</div></Link>
            <Link to="/popular_movies" onClick={handleItemClick}><div className={mobileLinkStyle}>Popular Movies</div></Link>
            <Link to="/top_rated_movies" onClick={handleItemClick}><div className={mobileLinkStyle}>Top Rated</div></Link>
            <Link to="/trending_movies" onClick={handleItemClick}><div className={mobileLinkStyle}>Trending Movies</div></Link>
          </div>
      );
  }

  // Desktop Style
  const linkStyle = 'px-4 py-2 bg-white/70 text-black hover:bg-white/90 border border-white/40 transition-colors rounded-full gap-2 shadow-sm font-medium backdrop-blur-md';
  
  return (
    <div className='fixed md:w-[80%] p-4 bg-slate-400/60 backdrop-blur-lg border border-white/30 z-50 shadow-lg top-5 rounded-lg mx-auto flex flex-row gap-4 items-center justify-between left-0 right-0'>
        <Link to="/">
          <div className='flex w-full items-center gap-2 text-white'>
            <div className={linkStyle}><SiThemoviedatabase size={25}/></div>
            <div className={`${linkStyle} flex items-center`}><RiMovieAiFill size={22} className="text-blue-600" /> Cine Verse</div>
          </div>
        </Link>

        <div className='flex flex-row items-center gap-2 justify-between'>
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
