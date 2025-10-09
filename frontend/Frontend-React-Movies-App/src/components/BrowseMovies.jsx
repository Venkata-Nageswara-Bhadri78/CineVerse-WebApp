import React, { useState, useEffect } from 'react';
import { useAPIKey } from '../Context/ApiKeyProvider';
import MoviesList from './MoviesList';

const useFetchSearchResults = (searchInput) => {
    const apiKey = useAPIKey();
    const [searchResult, setSearchResult] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        if (!apiKey || !searchInput) {
            setSearchResult([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true); 
            setError(null); 

            try {
                const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchInput)}&page=1`;
                const res = await fetch(searchApi);

                if (!res.ok) {
                    throw new Error(`An error occurred: ${res.statusText}`);
                }

                const data = await res.json();
                setSearchResult(data.results || []);

            } catch (err) {
                setError(err.message);
                setSearchResult([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();

    }, [searchInput, apiKey]); 

    return { searchResult, loading, error };
};


const BrowseMovies = () => {
  const [inputValue, setInputValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const { searchResult, loading, error } = useFetchSearchResults(searchTerm);
  const handleSearch = () => {
    setSearchTerm(inputValue);
  };  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className='w-full gap-3 p-3 bg-gray-300 flex justify-center items-center'>
        <input
          className='p-2 w-1/2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
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

      <div className='container w-full min-h-screen'>
        {!loading && <div className='text-center mt-8'>Search for your Favourite Movies</div>}
        {loading && <div className='text-center mt-8'>Loading movies...</div>}
        {error && <div className='text-center mt-8 text-red-600'>Error: {error}</div>}
        {!loading && !error && searchTerm && searchResult.length === 0 && (
          <div className='text-center mt-8 text-gray-500'>No movies found for "{searchTerm}".</div>
        )}
        {searchResult.length > 0 && <MoviesList pageStyle={true} trending={searchResult} />}
      </div>
    </>
  );
}

export default BrowseMovies;