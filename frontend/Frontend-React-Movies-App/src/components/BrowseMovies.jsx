import React, { useState } from 'react';
import { useSearch } from '../API/Tmdb';
import MoviesList from './MoviesList';

const BrowseMovies = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  
  const { searchResult, loading, error } = useSearch(searchTerm, page);

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setPage(1); // Reset to page 1 on new search
  };  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className='w-full gap-3 p-3 bg-gray-200 flex justify-center items-center'>
        <input
          className='p-2 w-1/2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder='Search for a movie...'
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className='bg-black p-2 px-4 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed'
        >
          {loading ? 'Searching...' : 'SEARCH'}
        </button>
      </div>

      <div className='container bg-gray-200 w-full min-h-screen'>
        {!loading && !searchTerm && <div className='text-center pt-8 text-gray-600 font-medium'>Search for your Favourite Movies</div>}
        {loading && <div className='text-center pt-8 text-gray-600 animate-pulse'>Loading movies...</div>}
        {error && <div className='text-center pt-8 text-red-600 font-semibold'>Error: {error}</div>}
        {!loading && !error && searchTerm && searchResult.length === 0 && (
          <div className='text-center mt-8 text-gray-500'>No movies found for "{searchTerm}".</div>
        )}
        {searchResult.length > 0 && <MoviesList pageStyle={true} trending={searchResult} />}
      </div>
    </>
  );
}

export default BrowseMovies;