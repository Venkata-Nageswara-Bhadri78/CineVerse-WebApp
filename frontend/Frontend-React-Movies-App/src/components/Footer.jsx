import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center p-4 mt-10">
      <p>
        © {new Date().getFullYear()} My Movie App. All rights reserved.
      </p>
      <p className="mt-2 text-sm">
        This product uses the 
        <a 
          href="https://www.themoviedb.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-1"
        >
          TMDB API
        </a> 
        but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
