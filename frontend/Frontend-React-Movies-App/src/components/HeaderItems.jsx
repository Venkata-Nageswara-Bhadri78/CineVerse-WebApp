import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItems = ({ showMenu, setShowMenu }) => {
  const linkStyle =
    'px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600 hover:text-white text-white';

  return (
    <div
      className={`md:flex md:flex-row flex-col gap-2 md:gap-4 items-center justify-between bg-black md:bg-blue-500 p-4 ${
        showMenu ? 'flex' : 'hidden md:flex'
      }`}
    >
      <Link to="/"><div className={linkStyle}>Home</div></Link>
      <Link to="/browse_movies"><div className={linkStyle}>Browse Movies</div></Link>
      <Link to="/popular_movies"><div className={linkStyle}>Popular Movies</div></Link>
      <Link to="/top_rated_movies"><div className={linkStyle}>Top Rated</div></Link>
      <Link to="/trending_movies"><div className={linkStyle}>Trending Movies</div></Link>
    </div>
  );
};

export default HeaderItems;
