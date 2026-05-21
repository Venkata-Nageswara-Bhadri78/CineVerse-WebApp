import React, { useEffect, useState } from 'react'
import { fetchTmdb } from '../services/Tmdb';

export const useAllMoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAllMoviesData = async () => {
      try {
        let allMovies = [];
        let page = 1;
        let totalPages = 1;

        // Fetching trending movies in a loop (limiting to 500 pages as per old logic)
        // Fetching trending movies in parallel chunks for better performance
        const CHUNK_SIZE = 5;
        while (page <= totalPages && page <= 100) { // Reduced to 100 as 500 is excessive for most cases
          const promises = [];
          for (let i = 0; i < CHUNK_SIZE && page <= totalPages && page <= 100; i++) {
            promises.push(fetchTmdb({
              type: 'trending',
              category: 'movie',
              time: 'day',
              page: page
            }));
            page++;
          }
          
          const results = await Promise.all(promises);
          results.forEach(data => {
            allMovies = [...allMovies, ...data.results];
            totalPages = Math.min(data.total_pages, 100);
          });
        }

        setMovies(allMovies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMoviesData();
  }, []);

  return { movies, loading, error };
};


export const usePersonDetails = ({type, personId}) => {
    const [person, setPerson] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPersonDetails = async () => {
            try {
                const data = await fetchTmdb({
                    type: type,
                    person_id: personId
                });
                
                if (type === 'person') {
                    setPerson([data]);
                } else {
                    setPerson(data);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchPersonDetails();
    }, [type, personId]);
    return { person, loading, error };
}

export const useMovieDetails = ({type, movieId, credits = "", page = 1}) => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompleteData = async () => {
            try {
                const data = await fetchTmdb({
                    type,
                    movie_id: movieId,
                    credits,
                    page
                });
                
                if (credits === "/credits") {
                    setMovie(data.cast);
                } else {
                    setMovie([data]);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompleteData();
    }, [type, movieId, credits, page]);

    return { movie, loading, error };
};

export const useTopRatedMovies = ({type, category, page = 1}) => {
    const [topRated, setTopRated] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompleteData = async () => {
            try {
                const data = await fetchTmdb({
                    type,
                    category,
                    page
                });
                setTopRated(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchCompleteData();
    }, [type, category, page]);

    return {topRated, loading, error};
}

export const usePopularMovies = ({page = 1} = {}) => {
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const data = await fetchTmdb({
                    type: 'movie',
                    category: 'popular',
                    page
                });
                setPopular(data.results);
            } catch (err) {
                setError("Error in Fetching Data...." + err);
            } finally {
                setLoading(false);
            }
        }
        fetchPopularMovies();
    }, [page]);

    return { popular, error, loading };
}

export const useTrendingMovies = ({time, type, page}) => {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await fetchTmdb({
                    type: 'trending',
                    category: type,
                    time,
                    page
                });
                setTrending(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchTrendingMovies();
    }, [time, type, page])
  return { trending, loading, error };
}


export const useNowPlayingMovies = ({page = 1} = {}) => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const data = await fetchTmdb({
                    type: 'movie',
                    category: 'now_playing',
                    page
                });
                setNowPlaying(data.results);
            } catch (err) {
                setError("Error in Fetching Data...." + err);
            } finally {
                setLoading(false);
            }
        }
        fetchNowPlayingMovies();
    }, [page]);

    return { nowPlaying, error, loading };
}


export const useSearch = (query, page = 1) => {
    const [searchResult, setSearchResult] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) {
            setSearchResult([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            try {
                const data = await fetchTmdb({
                    type: 'search',
                    query,
                    page
                });
                setSearchResult(data.results || []);
            } catch (err) {
                setError(err.message);
                setSearchResult([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query, page]);

    return { searchResult, loading, error };
};

